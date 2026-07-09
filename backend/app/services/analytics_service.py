from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.sales import Sales


class AnalyticsService:

    @staticmethod
    def dashboard(db: Session):

        revenue = db.query(
            func.sum(Sales.revenue)
        ).scalar() or 0

        orders = db.query(
            func.sum(Sales.quantity)
        ).scalar() or 0

        products = (
            db.query(Sales.product)
            .distinct()
            .count()
        )

        categories = (
            db.query(Sales.category)
            .distinct()
            .count()
        )

        return {
            "revenue": revenue,
            "orders": orders,
            "products": products,
            "categories": categories,
            "growth": 18
        }

    @staticmethod
    def revenue_chart(db: Session):

        rows = (
            db.query(
                Sales.month,
                func.sum(Sales.revenue)
            )
            .group_by(Sales.month)
            .all()
        )

        return [
            {
                "month": month,
                "revenue": revenue
            }
            for month, revenue in rows
        ]

    @staticmethod
    def category_chart(db: Session):

        rows = (
            db.query(
                Sales.category,
                func.sum(Sales.revenue)
            )
            .group_by(Sales.category)
            .all()
        )

        return [
            {
                "name": category,
                "value": revenue
            }
            for category, revenue in rows
        ]