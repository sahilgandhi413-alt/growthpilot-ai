from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.uploaded_data import UploadedData


class CustomerService:

    @staticmethod
    def summary(db: Session):

        total_customers = (
            db.query(
                func.count(func.distinct(UploadedData.customer))
            ).scalar()
            or 0
        )

        returning_customers = (
            db.query(UploadedData.customer)
            .group_by(UploadedData.customer)
            .having(func.count(UploadedData.id) > 1)
            .count()
        )

        new_customers = (
            total_customers - returning_customers
        )

        returning_percent = (
            round(
                returning_customers * 100 / total_customers,
                1,
            )
            if total_customers
            else 0
        )

        churn_rate = (
            round(
                new_customers * 100 / total_customers,
                1,
            )
            if total_customers
            else 0
        )

        return {
            "total_customers": total_customers,
            "returning_customers": returning_percent,
            "new_customers": new_customers,
            "churn_rate": churn_rate,
        }

    @staticmethod
    def chart(db: Session):

        rows = (
            db.query(
                UploadedData.order_date,
                func.count(
                    func.distinct(
                        UploadedData.customer
                    )
                ).label("customers"),
            )
            .group_by(UploadedData.order_date)
            .order_by(UploadedData.order_date)
            .all()
        )

        return [
            {
                "month": row.order_date,
                "customers": int(row.customers),
            }
            for row in rows
        ]

    @staticmethod
    def table(db: Session):

        rows = (
            db.query(
                UploadedData.customer,
                
                func.count(UploadedData.id).label("orders"),
                func.sum(UploadedData.sales).label("revenue"),
            )
            
            .order_by(
                func.sum(UploadedData.sales).desc()
            )
            .all()
        )

        result = []

        for row in rows:

            revenue = float(row.revenue or 0)
            orders = int(row.orders or 0)

            lifetime_value = (
                revenue / orders
                if orders
                else 0
            )

            if revenue >= 100000:
                tier = "Platinum"
            elif revenue >= 50000:
                tier = "Gold"
            else:
                tier = "Silver"

            result.append(
                {
                    "customer": row.customer,
                    
                    "orders": orders,
                    "revenue": revenue,
                    "lifetime_value": round(
                        lifetime_value,
                        2,
                    ),
                    "tier": tier,
                }
            )

        return result
    @staticmethod
    def insights(db: Session):

        total_customers = (
            db.query(
                func.count(func.distinct(UploadedData.customer))
            ).scalar()
            or 0
        )

        returning_customers = (
            db.query(UploadedData.customer)
            .group_by(UploadedData.customer)
            .having(func.count(UploadedData.id) > 1)
            .count()
        )

        retention_rate = (
            round(
                returning_customers * 100 / total_customers,
                1,
            )
            if total_customers
            else 0
        )

        top_customer = (
            db.query(
                UploadedData.customer,
                func.sum(UploadedData.sales).label("revenue"),
            )
            .group_by(UploadedData.customer)
            .order_by(
                func.sum(UploadedData.sales).desc()
            )
            .first()
        )

        total_revenue = (
            db.query(
                func.sum(UploadedData.sales)
            ).scalar()
            or 0
        )

        average_order = (
            db.query(
                func.avg(UploadedData.sales)
            ).scalar()
            or 0
        )

        confidence = 97

        if retention_rate >= 60:

            summary = (
                f"The business currently serves {total_customers} unique customers "
                f"with a retention rate of {retention_rate}%. "
                f"Total customer revenue generated is ₹{total_revenue:,.2f}. "
                "Customer loyalty is healthy and repeat purchases are strong."
            )

            recommendation = (
                "Continue rewarding loyal customers with exclusive offers and "
                "launch referral campaigns to attract similar high-value customers."
            )

        else:

            summary = (
                f"The business currently serves {total_customers} unique customers "
                f"with a retention rate of {retention_rate}%. "
                "Customer retention is below the desired level and repeat purchases "
                "can be improved."
            )

            recommendation = (
                "Introduce personalized discounts, loyalty rewards and email "
                "campaigns to increase repeat customer purchases."
            )

        return {
            "summary": summary,
            "confidence": confidence,
            "recommendation": recommendation,
            "top_customer": (
                top_customer.customer
                if top_customer
                else "N/A"
            ),
            "retention_rate": retention_rate,
            "average_order_value": round(
                float(average_order),
                2,
            ),
        }