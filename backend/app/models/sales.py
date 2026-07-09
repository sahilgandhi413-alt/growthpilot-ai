from sqlalchemy import Column, Float, Integer, String

from app.database.database import Base


class Sales(Base):
    __tablename__ = "sales"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String, nullable=True)
    customer = Column(String, nullable=False)
    product = Column(String, nullable=False)
    category = Column(String, nullable=False)
    month = Column(String, nullable=True)
    quantity = Column(Integer, default=0)
    revenue = Column(Float, default=0)
    stock = Column(Integer, default=0)
