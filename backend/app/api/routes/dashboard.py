from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.customer import Customer
from app.models.inventory import InventoryItem
from app.models.marketing import MarketingCampaign
from app.models.recommendation import Recommendation
from app.schemas.dashboard import DashboardMetrics

router = APIRouter(prefix="/dashboard", tags=["dashboard"])


@router.get("/metrics", response_model=DashboardMetrics)
def get_dashboard_metrics(db: Session = Depends(get_db)) -> DashboardMetrics:
    low_stock_items = (
        db.query(InventoryItem)
        .filter(InventoryItem.stock_quantity <= InventoryItem.reorder_point)
        .count()
    )
    campaign_revenue = db.query(func.coalesce(func.sum(MarketingCampaign.revenue), 0)).scalar()

    return DashboardMetrics(
        customers=db.query(Customer).count(),
        inventory_items=db.query(InventoryItem).count(),
        low_stock_items=low_stock_items,
        active_campaigns=db.query(MarketingCampaign)
        .filter(MarketingCampaign.status == "active")
        .count(),
        campaign_revenue=float(campaign_revenue or 0),
        recommendations=db.query(Recommendation).count(),
    )
