from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.dashboard_service import DashboardService

router = APIRouter(tags=["Dashboard"])


@router.get("/dashboard")
def dashboard(
    db: Session = Depends(get_db)
):
    return DashboardService.summary(db)


@router.get("/dashboard/revenue")
def revenue_chart(
    db: Session = Depends(get_db)
):
    return DashboardService.revenue_chart(db)


@router.get("/dashboard/category")
def category_chart(
    db: Session = Depends(get_db)
):
    return DashboardService.category_chart(db)


@router.get("/dashboard/orders")
def recent_orders(
    db: Session = Depends(get_db)
):
    return DashboardService.recent_orders(db)


@router.get("/dashboard/insights")
def dashboard_insights(
    db: Session = Depends(get_db)
):
    return DashboardService.insights(db)