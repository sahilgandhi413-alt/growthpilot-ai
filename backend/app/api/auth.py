from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.schemas.user import (
    UserRegister,
    UserLogin,
)

from app.services.auth_service import (
    register_user,
    login_user,
)

from app.utils.security import create_access_token # pyright: ignore[reportMissingImports]

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register")
def register(
    data: UserRegister,
    db: Session = Depends(get_db),
):

    user = register_user(db, data)

    if not user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists",
        )

    return {
        "message": "Registration successful"
    }


@router.post("/login")
def login(
    data: UserLogin,
    db: Session = Depends(get_db),
):

    user = login_user(
        db,
        data.email,
        data.password,
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )

    token = create_access_token(
        {
            "sub": user.email,
            "role": user.role,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "name": user.name,
            "email": user.email,
            "role": user.role,
        },
    }