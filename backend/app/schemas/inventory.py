from datetime import datetime

from pydantic import BaseModel, ConfigDict


class InventoryItemBase(BaseModel):
    sku: str
    name: str
    category: str
    stock_quantity: int = 0
    reorder_point: int = 10
    unit_price: float = 0.0


class InventoryItemCreate(InventoryItemBase):
    pass


class InventoryItemUpdate(BaseModel):
    sku: str | None = None
    name: str | None = None
    category: str | None = None
    stock_quantity: int | None = None
    reorder_point: int | None = None
    unit_price: float | None = None


class InventoryItemRead(InventoryItemBase):
    id: int
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
