from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func

from app.database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100), nullable=False)

    company = Column(String(100), nullable=True)

    email = Column(String(120), unique=True, nullable=False)

    password = Column(String(255), nullable=False)

    role = Column(String(30), default="Admin")

    created_at = Column(DateTime(timezone=True), server_default=func.now())