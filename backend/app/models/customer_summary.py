from sqlalchemy import Column, Integer, String, Float

from app.database.database import Base


class CustomerSummary(Base):

    __tablename__ = "customer_summary"

    id = Column(Integer, primary_key=True, index=True)

    customer = Column(String, nullable=False)

    total_orders = Column(Integer, default=0)

    total_quantity = Column(Integer, default=0)

    total_spent = Column(Float, default=0)

    average_order_value = Column(Float, default=0)

    segment = Column(String, default="Bronze")