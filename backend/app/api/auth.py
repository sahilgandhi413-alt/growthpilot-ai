from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.auth import RegisterRequest, LoginRequest
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db),
):
    try:
        return AuthService.register(db, request)

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.post("/login")
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):
    try:
        return AuthService.login(db, request)

    except Exception as e:
        raise HTTPException(
            status_code=401,
            detail=str(e),
        )


@router.get("/me")
def me(
    email: str,
    db: Session = Depends(get_db),
):

    user = AuthService.current_user(
        db,
        email,
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    return {
        "id": user.id,
        "full_name": user.full_name,
        "company": user.company,
        "email": user.email,
        "role": user.role,
    }