from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.analytics_service import AnalyticsService
from app.services.insight_service import InsightService

router = APIRouter()


@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    data = AnalyticsService.dashboard(db)
    summary = data.get("summary", {})
    return {
        "revenue": summary.get("total_revenue", 0),
        "orders": summary.get("total_orders", 0),
        "products": summary.get("total_units", 0),
        "growth": 18,
        "summary": summary,
    }


@router.get("/dashboard/revenue")
def revenue(db: Session = Depends(get_db)):
    return AnalyticsService.revenue_chart(db)


@router.get("/dashboard/category")
def category(db: Session = Depends(get_db)):
    return AnalyticsService.category_chart(db)


@router.get("/dashboard/orders")
def orders():
    return [
        {"id": 1001, "customer": "John", "amount": 12000, "status": "Completed"},
        {"id": 1002, "customer": "Emma", "amount": 9500, "status": "Pending"},
    ]


@router.get("/dashboard/inventory-alerts")
def inventory_alerts():
    return [
        {"product": "Macbook Pro", "stock": 4, "status": "Critical"},
        {"product": "AirPods", "stock": 8, "status": "Low"},
    ]


@router.get("/dashboard/activity")
def activity():
    return [
        {"title": "New Order", "time": "2 min ago"},
        {"title": "Inventory Updated", "time": "10 min ago"},
        {"title": "Forecast Generated", "time": "30 min ago"},
    ]


@router.get("/dashboard/insights")
def insights(db: Session = Depends(get_db)):
    return {"summary": InsightService.generate(db)}
