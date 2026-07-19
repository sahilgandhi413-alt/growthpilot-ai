from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.uploaded_data import UploadedData


class InventoryService:

    @staticmethod
    def summary(db: Session):

        total_products = (
            db.query(
                func.count(func.distinct(UploadedData.product))
            ).scalar()
            or 0
        )

        total_stock = (
            db.query(
                func.sum(UploadedData.quantity)
            ).scalar()
            or 0
        )

        low_stock_products = (
            db.query(UploadedData)
            .filter(UploadedData.quantity <= 5)
            .count()
        )

        inventory_value = (
            db.query(
                func.sum(UploadedData.sales)
            ).scalar()
            or 0
        )

        if low_stock_products == 0:
            health = "Good"
        elif low_stock_products <= 5:
            health = "Average"
        else:
            health = "Critical"

        return {
            "inventory_value": round(inventory_value, 2),
            "total_products": total_products,
            "total_stock": total_stock,
            "low_stock_products": low_stock_products,
            "health": health,
        }

    @staticmethod
    def chart(db: Session):

        rows = (
            db.query(
                UploadedData.product,
                func.sum(UploadedData.quantity).label("stock"),
            )
            .group_by(UploadedData.product)
            .order_by(func.sum(UploadedData.quantity).desc())
            .limit(10)
            .all()
        )

        return [
            {
                "product": row.product,
                "stock": int(row.stock or 0),
            }
            for row in rows
        ]

    @staticmethod
    def table(db: Session):

        rows = (
            db.query(
                UploadedData.product,
                UploadedData.category,
                func.sum(UploadedData.quantity).label("stock"),
                func.count(UploadedData.id).label("sold"),
                func.sum(UploadedData.sales).label("revenue"),
            )
            .group_by(
                UploadedData.product,
                UploadedData.category,
            )
            .order_by(func.sum(UploadedData.sales).desc())
            .all()
        )

        result = []

        for row in rows:

            stock = int(row.stock or 0)

            if stock <= 5:
                status = "Critical"
            elif stock <= 15:
                status = "Low"
            else:
                status = "Healthy"

            result.append(
                {
                    "product": row.product,
                    "category": row.category,
                    "stock": stock,
                    "sold": int(row.sold or 0),
                    "revenue": float(row.revenue or 0),
                    "status": status,
                }
            )

        return result

    @staticmethod
    def alerts(db: Session):

        rows = (
            db.query(
                UploadedData.product,
                func.sum(UploadedData.quantity).label("stock"),
            )
            .group_by(UploadedData.product)
            .order_by(func.sum(UploadedData.quantity).asc())
            .all()
        )

        alerts = []

        for row in rows:

            stock = int(row.stock or 0)

            if stock <= 5:
                priority = "Critical"
            elif stock <= 15:
                priority = "Warning"
            else:
                continue

            alerts.append(
                {
                    "product": row.product,
                    "stock": stock,
                    "priority": priority,
                }
            )

        return alerts

    @staticmethod
    def recommendations(db: Session):

        rows = (
            db.query(
                UploadedData.product,
                func.sum(UploadedData.quantity).label("stock"),
            )
            .group_by(UploadedData.product)
            .order_by(func.sum(UploadedData.quantity).asc())
            .limit(6)
            .all()
        )

        recommendations = []

        for row in rows:

            stock = int(row.stock or 0)

            if stock <= 5:
                recommended = 50
                reason = (
                    "Critical stock level detected. "
                    "Demand may exceed available inventory."
                )

            elif stock <= 15:
                recommended = 30
                reason = (
                    "Stock is getting low. "
                    "Restock before demand increases."
                )

            else:
                recommended = 15
                reason = (
                    "Maintain healthy inventory levels."
                )

            recommendations.append(
                {
                    "product": row.product,
                    "current_stock": stock,
                    "recommended_order": recommended,
                    "reason": reason,
                }
            )

        return recommendations

    @staticmethod
    def restock(db: Session):
        return InventoryService.recommendations(db)

    @staticmethod
    def ai_summary(db: Session):

        total_products = (
            db.query(
                func.count(func.distinct(UploadedData.product))
            ).scalar()
            or 0
        )

        low_stock = (
            db.query(UploadedData)
            .filter(UploadedData.quantity <= 5)
            .count()
        )

        total_stock = (
            db.query(
                func.sum(UploadedData.quantity)
            ).scalar()
            or 0
        )

        inventory_value = (
            db.query(
                func.sum(UploadedData.sales)
            ).scalar()
            or 0
        )

        confidence = 97

        if low_stock == 0:

            summary = (
                f"Inventory contains {total_products} products "
                f"with {total_stock:,} units available. "
                f"Current inventory value is ₹{inventory_value:,.2f}. "
                "No critical stock issues were detected."
            )

            recommendation = (
                "Inventory is healthy. Continue monitoring demand "
                "and replenish products based on sales trends."
            )

        else:

            summary = (
                f"Inventory contains {total_products} products "
                f"with {low_stock} products currently running low. "
                f"Current inventory value is ₹{inventory_value:,.2f}."
            )

            recommendation = (
                "Prioritize restocking low-stock products to "
                "avoid stockouts and lost sales."
            )

        return {
            "summary": summary,
            "confidence": confidence,
            "recommendation": recommendation,
        }