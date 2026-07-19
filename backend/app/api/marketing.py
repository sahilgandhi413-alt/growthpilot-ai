from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.marketing_service import MarketingService

router = APIRouter(tags=["Marketing"])


@router.get("/marketing/summary")
def marketing_summary(db: Session = Depends(get_db)):
    return MarketingService.summary(db)


@router.get("/marketing/chart")
def marketing_chart(db: Session = Depends(get_db)):
    return MarketingService.chart(db)


@router.get("/marketing/campaigns")
def marketing_campaigns(db: Session = Depends(get_db)):
    return MarketingService.campaigns(db)


@router.get("/marketing/insights")
def marketing_insights(db: Session = Depends(get_db)):
    return MarketingService.insights(db)