from sqlalchemy import Column, Integer, Float, String

from app.database.database import Base


class MarketingSummary(Base):

    __tablename__ = "marketing_summary"

    id = Column(Integer, primary_key=True, index=True)

    category = Column(String, nullable=False)

    total_revenue = Column(Float, default=0)

    total_quantity = Column(Integer, default=0)

    average_revenue = Column(Float, default=0)

    top_product = Column(String, default="")