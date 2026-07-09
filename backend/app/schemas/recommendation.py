from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class RecommendationBase(BaseModel):
    title: str
    category: str
    priority: str = "medium"
    summary: str
    actions: list[str] = Field(default_factory=list)
    impact: str | None = None


class RecommendationCreate(RecommendationBase):
    pass


class RecommendationUpdate(BaseModel):
    title: str | None = None
    category: str | None = None
    priority: str | None = None
    summary: str | None = None
    actions: list[str] | None = None
    impact: str | None = None


class RecommendationRead(RecommendationBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
