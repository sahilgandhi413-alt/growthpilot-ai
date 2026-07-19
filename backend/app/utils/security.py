import base64
import hashlib
import hmac
import json
import os
from datetime import datetime, timedelta, timezone
from typing import Any

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.user import User

SECRET_KEY = os.getenv("SECRET_KEY", "change-this-secret")
ALGORITHM = "HS256"

security = HTTPBearer()


# ----------------------------
# Password Hashing
# ----------------------------
def hash_password(password: str) -> str:
    salt = os.urandom(16)

    digest = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        100_000,
    )

    return (
        f"{base64.urlsafe_b64encode(salt).decode()}"
        f"${base64.urlsafe_b64encode(digest).decode()}"
    )


# ----------------------------
# Password Verification
# ----------------------------
def verify_password(
    password: str,
    hashed_password: str,
) -> bool:

    try:

        salt_value, digest_value = hashed_password.split("$", 1)

        salt = base64.urlsafe_b64decode(
            salt_value.encode()
        )

        expected = base64.urlsafe_b64decode(
            digest_value.encode()
        )

    except ValueError:
        return False

    actual = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        100_000,
    )

    return hmac.compare_digest(
        actual,
        expected,
    )


# ----------------------------
# JWT Creation
# ----------------------------
def create_access_token(
    data: dict[str, Any],
    expires_delta: timedelta | None = None,
) -> str:

    expires_at = datetime.now(
        timezone.utc
    ) + (expires_delta or timedelta(hours=8))

    payload = {
        **data,
        "exp": int(expires_at.timestamp()),
    }

    header = {
        "alg": ALGORITHM,
        "typ": "JWT",
    }

    header_segment = _b64_json(header)
    payload_segment = _b64_json(payload)

    signing_input = (
        f"{header_segment}.{payload_segment}"
    ).encode("utf-8")

    signature = hmac.new(
        SECRET_KEY.encode("utf-8"),
        signing_input,
        hashlib.sha256,
    ).digest()

    return (
        f"{header_segment}."
        f"{payload_segment}."
        f"{_b64(signature)}"
    )


# ----------------------------
# JWT Decode
# ----------------------------
def decode_access_token(
    token: str,
) -> dict[str, Any]:

    try:

        header_b64, payload_b64, signature_b64 = token.split(".")

        signing_input = (
            f"{header_b64}.{payload_b64}"
        ).encode()

        expected_signature = hmac.new(
            SECRET_KEY.encode(),
            signing_input,
            hashlib.sha256,
        ).digest()

        provided_signature = base64.urlsafe_b64decode(
            signature_b64 + "=" * (-len(signature_b64) % 4)
        )

        if not hmac.compare_digest(
            expected_signature,
            provided_signature,
        ):
            raise ValueError("Invalid Signature")

        payload_json = base64.urlsafe_b64decode(
            payload_b64 + "=" * (-len(payload_b64) % 4)
        )

        payload = json.loads(payload_json)

        if payload["exp"] < int(
            datetime.now(
                timezone.utc
            ).timestamp()
        ):
            raise ValueError("Token Expired")

        return payload

    except Exception:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or Expired Token",
        )


# ----------------------------
# Current Logged In User
# ----------------------------
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
):

    payload = decode_access_token(
        credentials.credentials
    )

    email = payload.get("sub")

    if email is None:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid Token",
        )

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if user is None:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User Not Found",
        )

    return user


# ----------------------------
# Helpers
# ----------------------------
def _b64_json(
    value: dict[str, Any],
) -> str:

    return _b64(
        json.dumps(
            value,
            separators=(",", ":"),
        ).encode("utf-8")
    )


def _b64(
    value: bytes,
) -> str:

    return (
        base64.urlsafe_b64encode(value)
        .decode("utf-8")
        .rstrip("=")
    )