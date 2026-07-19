from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.customer_service import CustomerService

router = APIRouter(tags=["Customers"])


@router.get("/customers/summary")
def customer_summary(db: Session = Depends(get_db)):
    return CustomerService.summary(db)


@router.get("/customers/chart")
def customer_chart(db: Session = Depends(get_db)):
    return CustomerService.chart(db)


@router.get("/customers/table")
def customer_table(db: Session = Depends(get_db)):
    return CustomerService.table(db)


@router.get("/customers/insights")
def customer_insights(db: Session = Depends(get_db)):
    return CustomerService.insights(db)