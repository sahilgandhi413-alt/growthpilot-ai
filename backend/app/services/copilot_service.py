from sqlalchemy.orm import Session

from app.services.dashboard_service import DashboardService
from app.services.inventory_service import InventoryService
from app.services.forecast_service import ForecastService
from app.services.customer_service import CustomerService
from app.services.marketing_service import MarketingService


class CopilotService:

    @staticmethod
    def chat(message: str, db: Session):

        question = message.lower()

        # Dashboard

        if "dashboard" in question or "summary" in question:

            data = DashboardService.summary(db)

            return {
                "role": "assistant",
                "message":
                    f"""📊 Business Summary

Revenue : ₹{data['total_revenue']}

Orders : {data['total_orders']}

Products : {data['total_products']}

Growth : {data['growth']}%
"""
            }

        # Inventory

        if "inventory" in question or "stock" in question:

            data = InventoryService.summary(db)

            return {
                "role": "assistant",
                "message":
                    f"""📦 Inventory

Inventory Value : ₹{data['inventory_value']}

Products : {data['total_products']}

Units : {data['total_stock']}

Low Stock : {data['low_stock_products']}

Health : {data['health']}
"""
            }

        # Forecast

        if "forecast" in question:

            data = ForecastService.summary(db)

            return {
                "role": "assistant",
                "message":
                    f"""📈 Forecast

Revenue

₹{data['predicted_revenue']}

Growth

{data['growth']}%

Confidence

{data['confidence']}%
"""
            }

        # Customers

        if "customer" in question:

            data = CustomerService.summary(db)

            return {
                "role": "assistant",
                "message":
                    f"""👥 Customers

Total Customers

{data['total_customers']}

Repeat

{data['repeat_customers']}

Average Order

₹{data['average_order_value']}
"""
            }

        # Marketing

        if "marketing" in question:

            data = MarketingService.summary(db)

            return {
                "role": "assistant",
                "message":
                    f"""📢 Marketing

Campaign Spend

₹{data['campaign_spend']}

Revenue

₹{data['revenue_generated']}

ROI

{data['roi']}%

ROAS

{data['roas']}
"""
            }

        return {
            "role": "assistant",
            "message":
                """Hello 👋

I can answer questions about

• Dashboard

• Inventory

• Forecast

• Customers

• Marketing

Try asking

Show inventory

Forecast revenue

Customer insights

Marketing performance
"""
        }