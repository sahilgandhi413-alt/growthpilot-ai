from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.uploaded_data import UploadedData


class ForecastService:

    @staticmethod
    def summary(db: Session):

        revenue = (
            db.query(func.sum(UploadedData.sales)).scalar()
            or 0
        )

        orders = (
            db.query(func.sum(UploadedData.quantity)).scalar()
            or 0
        )

        return {
            "current_revenue": round(revenue, 2),
            "predicted_revenue": round(revenue * 1.15, 2),
            "current_orders": int(orders),
            "predicted_orders": int(orders * 1.10),
            "growth": 15,
            "confidence": 96,
        }

    @staticmethod
    def chart(db: Session):

        rows = (
            db.query(
                UploadedData.order_date,
                func.sum(UploadedData.sales)
            )
            .group_by(UploadedData.order_date)
            .order_by(UploadedData.order_date)
            .all()
        )

        return [
            {
                "month": row[0],
                "actual": float(row[1]),
                "forecast": round(float(row[1]) * 1.15, 2),
            }
            for row in rows
        ]

    @staticmethod
    def predictions(db: Session):

        rows = (
            db.query(
                UploadedData.product,
                func.sum(UploadedData.quantity),
                func.sum(UploadedData.sales),
            )
            .group_by(UploadedData.product)
            .all()
        )

        return [
            {
                "product": row[0],
                "current_sales": int(row[1]),
                "predicted_sales": int(row[1] * 1.10),
                "current_revenue": float(row[2]),
                "predicted_revenue": round(float(row[2]) * 1.15, 2),
            }
            for row in rows
        ]

    @staticmethod
    def ai_summary(db: Session):

        summary = ForecastService.summary(db)

        return {
            "summary": (
                f"Revenue is forecast to increase by "
                f"{summary['growth']}% reaching "
                f"₹{summary['predicted_revenue']:,.0f}."
            ),
            "recommendation":
                "Increase stock for high-demand products and prepare marketing campaigns.",
            "confidence": summary["confidence"],
        }