from pydantic import BaseModel


class DashboardMetrics(BaseModel):
    customers: int
    inventory_items: int
    low_stock_items: int
    active_campaigns: int
    campaign_revenue: float
    recommendations: int
