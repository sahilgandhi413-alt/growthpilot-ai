from sqlalchemy import Column, Integer, String

from app.database.database import Base


class InventorySummary(Base):
    __tablename__ = "inventory_summary"

    id = Column(Integer, primary_key=True, index=True)

    product = Column(String, nullable=False)

    category = Column(String, nullable=False)

    stock = Column(Integer, default=0)

    status = Column(String, default="Healthy")

    suggested_order = Column(Integer, default=0)