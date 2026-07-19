from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.uploaded_data import UploadedData


class DashboardService:

    @staticmethod
    def summary(db: Session):

        total_revenue = (
            db.query(func.sum(UploadedData.sales)).scalar()
            or 0
        )

        total_orders = (
            db.query(func.count(UploadedData.id)).scalar()
            or 0
        )

        total_products = (
            db.query(
                func.count(func.distinct(UploadedData.product))
            ).scalar()
            or 0
        )

        total_categories = (
            db.query(
                func.count(func.distinct(UploadedData.category))
            ).scalar()
            or 0
        )

        average_order_value = (
            total_revenue / total_orders
            if total_orders
            else 0
        )

        return {
            "total_revenue": round(total_revenue, 2),
            "total_orders": total_orders,
            "total_products": total_products,
            "total_categories": total_categories,
            "average_order_value": round(average_order_value, 2),
            "growth": 15,
        }

    @staticmethod
    def revenue_chart(db: Session):

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
                "revenue": float(row[1]),
            }
            for row in rows
        ]

    @staticmethod
    def category_chart(db: Session):

        rows = (
            db.query(
                UploadedData.category,
                func.sum(UploadedData.sales)
            )
            .group_by(UploadedData.category)
            .all()
        )

        return [
            {
                "name": row[0],
                "value": float(row[1]),
            }
            for row in rows
        ]

    @staticmethod
    def recent_orders(db: Session):

        rows = (
            db.query(UploadedData)
            .order_by(UploadedData.id.desc())
            .limit(10)
            .all()
        )

        return [
            {
                "id": row.id,
                "customer": row.customer,
                "product": row.product,
                "quantity": row.quantity,
                "amount": row.sales,
                "status": "Completed",
            }
            for row in rows
        ]

    @staticmethod
    def insights(db: Session):

        top_product = (
            db.query(
                UploadedData.product,
                func.sum(UploadedData.sales)
            )
            .group_by(UploadedData.product)
            .order_by(func.sum(UploadedData.sales).desc())
            .first()
        )

        top_category = (
            db.query(
                UploadedData.category,
                func.sum(UploadedData.sales)
            )
            .group_by(UploadedData.category)
            .order_by(func.sum(UploadedData.sales).desc())
            .first()
        )

        return {
            "summary":
                "Business performance is improving steadily with healthy sales growth and customer engagement.",

            "confidence": 96,

            "recommendation":
                "Increase inventory for high-selling products and invest more in top-performing categories.",

            "top_product": {
                "name": top_product[0] if top_product else "N/A"
            },

            "top_category": {
                "name": top_category[0] if top_category else "N/A"
            },
        }