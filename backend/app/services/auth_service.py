from sqlalchemy.orm import Session

from ..models.user import User
from ..utils.security import ( # pyright: ignore[reportMissingImports]
    hash_password,
    verify_password,
)


def register_user(db: Session, data):

    existing = (
        db.query(User)
        .filter(User.email == data.email)
        .first()
    )

    if existing:
        return None

    user = User(
        name=data.name,
        email=data.email,
        password=hash_password(data.password),
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user


def login_user(db: Session, email, password):

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if not user:
        return None

    if not verify_password(password, user.password):
        return None

    return user