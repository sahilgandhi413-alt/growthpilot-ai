from sqlalchemy import Column, Integer, Float

from app.database.database import Base


class ForecastSummary(Base):

    __tablename__ = "forecast_summary"

    id = Column(Integer, primary_key=True, index=True)

    predicted_revenue = Column(Float, default=0)

    predicted_quantity = Column(Integer, default=0)

    growth = Column(Float, default=0)