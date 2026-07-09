from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.sales import Sales


class CustomerService:

    @staticmethod
    def total_customers(db: Session):

        return (
            db.query(Sales.customer)
            .distinct()
            .count()
        )

    @staticmethod
    def top_customers(db: Session):

        result = (
            db.query(
                Sales.customer,
                func.sum(Sales.revenue).label("spent")
            )
            .group_by(Sales.customer)
            .order_by(
                func.sum(Sales.revenue).desc()
            )
            .limit(10)
            .all()
        )

        return result

    @staticmethod
    def average_customer_value(db: Session):

        revenue = (
            db.query(
                func.sum(Sales.revenue)
            ).scalar()
            or 0
        )

        customers = (
            db.query(Sales.customer)
            .distinct()
            .count()
        )

        if customers == 0:
            return 0

        return revenue / customers