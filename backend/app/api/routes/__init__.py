from app.api.routes.customers import router as customers_router
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.inventory import router as inventory_router
from app.api.routes.marketing import router as marketing_router
from app.api.routes.recommendations import router as recommendations_router

__all__ = [
    "customers_router",
    "dashboard_router",
    "inventory_router",
    "marketing_router",
    "recommendations_router",
]
