from sqlalchemy import Column, Integer, Float, String

from app.database.database import Base


class UploadedData(Base):
    __tablename__ = "uploaded_data"

    id = Column(Integer, primary_key=True, index=True)

    order_id = Column(String, nullable=True)
    product = Column(String, nullable=True)
    category = Column(String, nullable=True)
    customer = Column(String, nullable=True)

    quantity = Column(Integer, nullable=True)

    sales = Column(Float, nullable=True)
    profit = Column(Float, nullable=True)

    region = Column(String, nullable=True)
    order_date = Column(String, nullable=True)