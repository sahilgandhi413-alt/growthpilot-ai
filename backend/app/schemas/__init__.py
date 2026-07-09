from app.schemas.customer import CustomerCreate, CustomerRead, CustomerUpdate
from app.schemas.dashboard import DashboardMetrics
from app.schemas.inventory import InventoryItemCreate, InventoryItemRead, InventoryItemUpdate
from app.schemas.marketing import (
    MarketingCampaignCreate,
    MarketingCampaignRead,
    MarketingCampaignUpdate,
)
from app.schemas.recommendation import (
    RecommendationCreate,
    RecommendationRead,
    RecommendationUpdate,
)

__all__ = [
    "CustomerCreate",
    "CustomerRead",
    "CustomerUpdate",
    "DashboardMetrics",
    "InventoryItemCreate",
    "InventoryItemRead",
    "InventoryItemUpdate",
    "MarketingCampaignCreate",
    "MarketingCampaignRead",
    "MarketingCampaignUpdate",
    "RecommendationCreate",
    "RecommendationRead",
    "RecommendationUpdate",
]
