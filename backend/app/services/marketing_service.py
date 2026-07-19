from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.uploaded_data import UploadedData


class MarketingService:

    @staticmethod
    def summary(db: Session):

        total_revenue = (
            db.query(func.sum(UploadedData.sales)).scalar()
            or 0
        )

        total_profit = (
            db.query(func.sum(UploadedData.profit)).scalar()
            or 0
        )

        active_campaigns = (
            db.query(
                func.count(
                    func.distinct(UploadedData.category)
                )
            ).scalar()
            or 0
        )

        ad_spend = total_revenue * 0.25

        roi = (
            ((total_revenue - ad_spend) / ad_spend) * 100
            if ad_spend > 0
            else 0
        )

        return {
            "active_campaigns": active_campaigns,
            "revenue": round(total_revenue, 2),
            "roi": round(roi, 2),
            "ad_spend": round(ad_spend, 2),
        }

    @staticmethod
    def chart(db: Session):

        rows = (
            db.query(
                UploadedData.order_date,
                func.sum(UploadedData.sales).label("revenue"),
            )
            .group_by(UploadedData.order_date)
            .order_by(UploadedData.order_date)
            .all()
        )

        chart = []

        for row in rows:

            revenue = float(row.revenue or 0)

            chart.append(
                {
                    "month": row.order_date,
                    "revenue": revenue,
                    "spend": round(revenue * 0.25, 2),
                    "name": row.order_date,
                    "value": revenue,
                }
            )

        return chart
    @staticmethod
    def campaigns(db: Session):

        rows = (
            db.query(
                UploadedData.product,
                UploadedData.category,
                func.sum(UploadedData.sales).label("revenue"),
                func.sum(UploadedData.profit).label("profit"),
            )
            .group_by(
                UploadedData.product,
                UploadedData.category,
            )
            .order_by(func.sum(UploadedData.sales).desc())
            .all()
        )

        campaigns = []

        for row in rows:

            revenue = float(row.revenue or 0)
            profit = float(row.profit or 0)

            spend = revenue * 0.25

            roi = (
                ((revenue - spend) / spend) * 100
                if spend > 0
                else 0
            )

            ctr = (
                (profit / revenue) * 100
                if revenue > 0
                else 0
            )

            if roi >= 200:
                status = "Active"
            elif roi >= 120:
                status = "Paused"
            else:
                status = "Completed"

            campaigns.append(
                {
                    "campaign": f"{row.product} Campaign",
                    "channel": row.category,
                    "spend": round(spend, 2),
                    "revenue": round(revenue, 2),
                    "roi": round(roi, 2),
                    "ctr": round(ctr, 2),
                    "status": status,
                }
            )

        return campaigns

    @staticmethod
    def insights(db: Session):

        revenue = (
            db.query(
                func.sum(UploadedData.sales)
            ).scalar()
            or 0
        )

        profit = (
            db.query(
                func.sum(UploadedData.profit)
            ).scalar()
            or 0
        )

        best = (
            db.query(
                UploadedData.category,
                func.sum(UploadedData.sales).label("sales"),
            )
            .group_by(UploadedData.category)
            .order_by(func.sum(UploadedData.sales).desc())
            .first()
        )

        ad_spend = revenue * 0.25

        expected_roi = (
            ((revenue - ad_spend) / ad_spend) * 100
            if ad_spend > 0
            else 0
        )

        best_channel = (
            best.category
            if best
            else "N/A"
        )

        summary = (
            f"Marketing campaigns generated ₹{revenue:,.2f} in revenue "
            f"with ₹{profit:,.2f} total profit. "
            f"The highest-performing channel is {best_channel}, "
            f"which contributes the largest share of overall sales."
        )

        recommendation = (
            f"Increase investment in {best_channel} campaigns while "
            "optimizing lower-performing channels. Focus on high-profit "
            "products to maximize overall ROI."
        )

        return {
            "summary": summary,
            "confidence": 97,
            "recommendation": recommendation,
            "best_channel": best_channel,
            "expected_roi": round(expected_roi, 2),
        }