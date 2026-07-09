from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.models.sales import Sales


class InventoryService:
    @staticmethod
    def low_stock(db: Session):
        return db.query(Sales).filter(Sales.stock < 10).all()

    @staticmethod
    def out_of_stock(db: Session):
        return db.query(Sales).filter(Sales.stock == 0).all()


def analyze_inventory():
    db = SessionLocal()
    try:
        if db.query(Sales).count() == 0:
            return None

        low_stock_count = db.query(Sales).filter(Sales.stock < 10).count()
        out_of_stock_count = db.query(Sales).filter(Sales.stock == 0).count()
        total_stock = db.query(func.coalesce(func.sum(Sales.stock), 0)).scalar() or 0

        rows = (
            db.query(
                Sales.product,
                Sales.category,
                func.coalesce(func.sum(Sales.stock), 0).label("stock"),
                func.coalesce(func.sum(Sales.quantity), 0).label("sold"),
            )
            .group_by(Sales.product, Sales.category)
            .order_by(func.sum(Sales.stock).asc())
            .limit(10)
            .all()
        )

        return {
            "summary": {
                "total_stock": int(total_stock),
                "low_stock_items": low_stock_count,
                "out_of_stock_items": out_of_stock_count,
            },
            "items": [
                {
                    "product": row.product,
                    "category": row.category,
                    "stock": int(row.stock or 0),
                    "sold": int(row.sold or 0),
                }
                for row in rows
            ],
        }
    finally:
        db.close()
