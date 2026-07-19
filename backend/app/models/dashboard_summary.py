from sqlalchemy import Column, Integer, Float

from app.database.database import Base


class DashboardSummary(Base):
    __tablename__ = "dashboard_summary"

    id = Column(Integer, primary_key=True, index=True)

    total_revenue = Column(Float, default=0)

    total_orders = Column(Integer, default=0)

    total_products = Column(Integer, default=0)

    total_categories = Column(Integer, default=0)

    average_order_value = Column(Float, default=0)

    growth = Column(Float, default=0)