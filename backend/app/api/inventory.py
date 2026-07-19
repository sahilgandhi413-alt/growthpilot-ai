from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.inventory_service import InventoryService

router = APIRouter(tags=["Inventory"])


@router.get("/inventory/summary")
def summary(db: Session = Depends(get_db)):
    return InventoryService.summary(db)


@router.get("/inventory/table")
def table(db: Session = Depends(get_db)):
    return InventoryService.table(db)


@router.get("/inventory/chart")
def chart(db: Session = Depends(get_db)):
    return InventoryService.chart(db)


@router.get("/inventory/alerts")
def alerts(db: Session = Depends(get_db)):
    return InventoryService.alerts(db)


@router.get("/inventory/recommendations")
def recommendations(db: Session = Depends(get_db)):
    return InventoryService.recommendations(db)


@router.get("/inventory/restock")
def restock(db: Session = Depends(get_db)):
    return InventoryService.restock(db)


@router.get("/inventory/ai-summary")
def ai_summary(db: Session = Depends(get_db)):
    return InventoryService.ai_summary(db)