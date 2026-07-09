from sqlalchemy.orm import Session

from app.services.analytics_service import AnalyticsService


class InsightService:

    @staticmethod
    def generate(db: Session):

        data = AnalyticsService.dashboard(db)

        summary = []

        if data["growth"] > 10:
            summary.append(
                "Revenue is growing strongly."
            )

        if data["orders"] > 100:
            summary.append(
                "Order volume remains healthy."
            )

        if data["products"] < 20:
            summary.append(
                "Inventory diversity is limited."
            )

        return summary