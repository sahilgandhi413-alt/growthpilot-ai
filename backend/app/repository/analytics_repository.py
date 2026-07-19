from sqlalchemy.orm import Session
from sqlalchemy import func, desc

from app.models.uploaded_data import UploadedData


class AnalyticsRepository:

    # --------------------------
    # Dashboard
    # --------------------------

    @staticmethod
    def total_revenue(db: Session):
        return db.query(
            func.sum(UploadedData.revenue)
        ).scalar() or 0

    @staticmethod
    def total_orders(db: Session):
        return db.query(
            func.sum(UploadedData.quantity)
        ).scalar() or 0

    @staticmethod
    def total_products(db: Session):
        return (
            db.query(UploadedData.product)
            .distinct()
            .count()
        )

    @staticmethod
    def total_categories(db: Session):
        return (
            db.query(UploadedData.category)
            .distinct()
            .count()
        )

    # --------------------------
    # Products
    # --------------------------

    @staticmethod
    def all_products(db: Session):

        return (
            db.query(
                UploadedData.product,
                UploadedData.category,
                func.sum(UploadedData.stock).label("stock"),
                func.sum(UploadedData.quantity).label("sold"),
                func.sum(UploadedData.revenue).label("revenue")
            )
            .group_by(
                UploadedData.product,
                UploadedData.category
            )
            .all()
        )

    @staticmethod
    def low_stock_products(
        db: Session,
        threshold=20
    ):

        return (
            db.query(UploadedData)
            .filter(
                UploadedData.stock < threshold
            )
            .all()
        )

    # --------------------------
    # Best Sellers
    # --------------------------

    @staticmethod
    def best_product(db: Session):

        return (
            db.query(
                UploadedData.product,
                func.sum(UploadedData.revenue).label("revenue")
            )
            .group_by(UploadedData.product)
            .order_by(desc("revenue"))
            .first()
        )

    @staticmethod
    def best_category(db: Session):

        return (
            db.query(
                UploadedData.category,
                func.sum(UploadedData.revenue).label("revenue")
            )
            .group_by(UploadedData.category)
            .order_by(desc("revenue"))
            .first()
        )

    # --------------------------
    # Charts
    # --------------------------

    @staticmethod
    def monthly_revenue(db: Session):

        return (
            db.query(
                UploadedData.month,
                func.sum(UploadedData.revenue).label("revenue")
            )
            .group_by(UploadedData.month)
            .order_by(UploadedData.month)
            .all()
        )

    @staticmethod
    def category_revenue(db: Session):

        return (
            db.query(
                UploadedData.category,
                func.sum(UploadedData.revenue).label("revenue")
            )
            .group_by(UploadedData.category)
            .all()
        )

    # --------------------------
    # Orders
    # --------------------------

    @staticmethod
    def recent_orders(
        db: Session,
        limit=10
    ):

        return (
            db.query(UploadedData)
            .order_by(desc(UploadedData.id))
            .limit(limit)
            .all()
        )

    # --------------------------
    # Customers
    # --------------------------

    @staticmethod
    def customer_summary(db: Session):

        return (
            db.query(
                UploadedData.customer,
                func.sum(UploadedData.revenue).label("revenue"),
                func.sum(UploadedData.quantity).label("orders")
            )
            .group_by(UploadedData.customer)
            .order_by(desc("revenue"))
            .all()
        )