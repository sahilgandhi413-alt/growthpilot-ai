from datetime import datetime

from pydantic import BaseModel, ConfigDict


class MarketingCampaignBase(BaseModel):
    name: str
    channel: str
    status: str = "draft"
    budget: float = 0.0
    spend: float = 0.0
    revenue: float = 0.0
    started_at: datetime | None = None
    ended_at: datetime | None = None


class MarketingCampaignCreate(MarketingCampaignBase):
    pass


class MarketingCampaignUpdate(BaseModel):
    name: str | None = None
    channel: str | None = None
    status: str | None = None
    budget: float | None = None
    spend: float | None = None
    revenue: float | None = None
    started_at: datetime | None = None
    ended_at: datetime | None = None


class MarketingCampaignRead(MarketingCampaignBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
