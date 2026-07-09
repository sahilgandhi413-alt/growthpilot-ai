from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.sales import Sales


class AnalyticsService:

    @staticmethod
    def total_revenue(db: Session):
        return db.query(
            func.sum(Sales.revenue)
        ).scalar() or 0


    @staticmethod
    def total_orders(db: Session):
        return db.query(
            func.sum(Sales.quantity)
        ).scalar() or 0


    @staticmethod
    def total_products(db: Session):
        return db.query(
            Sales.product
        ).distinct().count()


    @staticmethod
    def total_categories(db: Session):
        return db.query(
            Sales.category
        ).distinct().count()


    @staticmethod
    def average_order_value(db: Session):

        revenue = AnalyticsService.total_revenue(db)

        orders = AnalyticsService.total_orders(db)

        if orders == 0:
            return 0

        return round(revenue / orders, 2)

    @staticmethod
    def top_products(db: Session, limit=5):

        result = (
            db.query(
                Sales.product,
                func.sum(Sales.revenue).label("revenue")
            )
            .group_by(Sales.product)
            .order_by(func.sum(Sales.revenue).desc())
            .limit(limit)
            .all()
        )

        return result

    @staticmethod
    def category_sales(db: Session):

        result = (
            db.query(
                Sales.category,
                func.sum(Sales.revenue).label("revenue")
            )
            .group_by(Sales.category)
            .all()
        )

        return result

    @staticmethod
    def monthly_revenue(db: Session):

        result = (
            db.query(
                Sales.month,
                func.sum(Sales.revenue)
            )
            .group_by(Sales.month)
            .all()
        )

        return result

    @staticmethod
    def low_stock(db: Session):

        return (
            db.query(Sales)
            .filter(Sales.stock < 10)
            .all()
        )