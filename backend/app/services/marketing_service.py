from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.sales import Sales


class MarketingService:

    @staticmethod
    def category_performance(db: Session):

        return (

            db.query(

                Sales.category,

                func.sum(Sales.revenue)

            )

            .group_by(Sales.category)

            .all()

        )