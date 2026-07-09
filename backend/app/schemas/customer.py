from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr


class CustomerBase(BaseModel):
    name: str
    email: EmailStr
    segment: str = "new"
    lifetime_value: float = 0.0
    last_purchase_at: datetime | None = None


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(BaseModel):
    name: str | None = None
    email: EmailStr | None = None
    segment: str | None = None
    lifetime_value: float | None = None
    last_purchase_at: datetime | None = None


class CustomerRead(CustomerBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
