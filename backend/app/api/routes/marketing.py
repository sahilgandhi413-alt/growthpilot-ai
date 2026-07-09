from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.marketing import MarketingCampaign
from app.schemas.marketing import (
    MarketingCampaignCreate,
    MarketingCampaignRead,
    MarketingCampaignUpdate,
)

router = APIRouter(prefix="/marketing", tags=["marketing"])


@router.get("/campaigns", response_model=list[MarketingCampaignRead])
def list_campaigns(db: Session = Depends(get_db)) -> list[MarketingCampaign]:
    return db.query(MarketingCampaign).order_by(MarketingCampaign.id.desc()).all()


@router.post(
    "/campaigns",
    response_model=MarketingCampaignRead,
    status_code=status.HTTP_201_CREATED,
)
def create_campaign(
    payload: MarketingCampaignCreate,
    db: Session = Depends(get_db),
) -> MarketingCampaign:
    campaign = MarketingCampaign(**payload.model_dump())
    db.add(campaign)
    db.commit()
    db.refresh(campaign)
    return campaign


@router.get("/campaigns/{campaign_id}", response_model=MarketingCampaignRead)
def get_campaign(campaign_id: int, db: Session = Depends(get_db)) -> MarketingCampaign:
    campaign = db.get(MarketingCampaign, campaign_id)
    if campaign is None:
        raise HTTPException(status_code=404, detail="Campaign not found")
    return campaign


@router.patch("/campaigns/{campaign_id}", response_model=MarketingCampaignRead)
def update_campaign(
    campaign_id: int,
    payload: MarketingCampaignUpdate,
    db: Session = Depends(get_db),
) -> MarketingCampaign:
    campaign = db.get(MarketingCampaign, campaign_id)
    if campaign is None:
        raise HTTPException(status_code=404, detail="Campaign not found")

    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(campaign, key, value)

    db.commit()
    db.refresh(campaign)
    return campaign


@router.delete("/campaigns/{campaign_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_campaign(campaign_id: int, db: Session = Depends(get_db)) -> None:
    campaign = db.get(MarketingCampaign, campaign_id)
    if campaign is None:
        raise HTTPException(status_code=404, detail="Campaign not found")

    db.delete(campaign)
    db.commit()
