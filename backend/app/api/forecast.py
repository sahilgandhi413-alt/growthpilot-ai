from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.forecast_service import ForecastService

router = APIRouter(tags=["Forecast"])


@router.get("/forecast/summary")
def summary(db: Session = Depends(get_db)):
    return ForecastService.summary(db)


@router.get("/forecast/chart")
def chart(db: Session = Depends(get_db)):
    return ForecastService.chart(db)


@router.get("/forecast/predictions")
def predictions(db: Session = Depends(get_db)):
    return ForecastService.predictions(db)


@router.get("/forecast/ai-summary")
def ai_summary(db: Session = Depends(get_db)):
    return ForecastService.ai_summary(db)