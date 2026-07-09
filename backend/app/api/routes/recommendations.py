from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.recommendation import Recommendation
from app.schemas.recommendation import (
    RecommendationCreate,
    RecommendationRead,
    RecommendationUpdate,
)

router = APIRouter(prefix="/recommendations", tags=["recommendations"])


@router.get("", response_model=list[RecommendationRead])
def list_recommendations(db: Session = Depends(get_db)) -> list[Recommendation]:
    return db.query(Recommendation).order_by(Recommendation.created_at.desc()).all()


@router.post("", response_model=RecommendationRead, status_code=status.HTTP_201_CREATED)
def create_recommendation(
    payload: RecommendationCreate,
    db: Session = Depends(get_db),
) -> Recommendation:
    recommendation = Recommendation(**payload.model_dump())
    db.add(recommendation)
    db.commit()
    db.refresh(recommendation)
    return recommendation


@router.get("/{recommendation_id}", response_model=RecommendationRead)
def get_recommendation(
    recommendation_id: int,
    db: Session = Depends(get_db),
) -> Recommendation:
    recommendation = db.get(Recommendation, recommendation_id)
    if recommendation is None:
        raise HTTPException(status_code=404, detail="Recommendation not found")
    return recommendation


@router.patch("/{recommendation_id}", response_model=RecommendationRead)
def update_recommendation(
    recommendation_id: int,
    payload: RecommendationUpdate,
    db: Session = Depends(get_db),
) -> Recommendation:
    recommendation = db.get(Recommendation, recommendation_id)
    if recommendation is None:
        raise HTTPException(status_code=404, detail="Recommendation not found")

    for key, value in payload.model_dump(exclude_unset=True).items():
        setattr(recommendation, key, value)

    db.commit()
    db.refresh(recommendation)
    return recommendation


@router.delete("/{recommendation_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_recommendation(recommendation_id: int, db: Session = Depends(get_db)) -> None:
    recommendation = db.get(Recommendation, recommendation_id)
    if recommendation is None:
        raise HTTPException(status_code=404, detail="Recommendation not found")

    db.delete(recommendation)
    db.commit()
