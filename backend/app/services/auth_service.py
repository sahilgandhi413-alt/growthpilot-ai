from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.auth import RegisterRequest, LoginRequest
from app.security.password import hash_password, verify_password
from app.security.jwt import create_access_token


class AuthService:

    @staticmethod
    def register(db: Session, request: RegisterRequest):

        # Check if email already exists
        existing_user = (
            db.query(User)
            .filter(User.email == request.email)
            .first()
        )

        if existing_user:
            raise Exception("Email already registered.")

        # Create user
        user = User(
            full_name=request.full_name,
            company=request.company,
            email=request.email,
            password=hash_password(request.password),
        )

        db.add(user)
        db.commit()
        db.refresh(user)

        token = create_access_token(
            {
                "sub": user.email,
                "id": user.id,
            }
        )

        return {
            "message": "Registration successful",
            "access_token": token,
            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "company": user.company,
                "email": user.email,
                "role": user.role,
            },
        }

    @staticmethod
    def login(db: Session, request: LoginRequest):

        user = (
            db.query(User)
            .filter(User.email == request.email)
            .first()
        )

        if not user:
            raise Exception("Invalid email or password")

        if not verify_password(
            request.password,
            user.password,
        ):
            raise Exception("Invalid email or password")

        token = create_access_token(
            {
                "sub": user.email,
                "id": user.id,
            }
        )

        return {
            "message": "Login successful",
            "access_token": token,
            "user": {
                "id": user.id,
                "full_name": user.full_name,
                "company": user.company,
                "email": user.email,
                "role": user.role,
            },
        }

    @staticmethod
    def current_user(db: Session, email: str):

        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )