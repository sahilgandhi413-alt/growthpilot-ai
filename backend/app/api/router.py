from fastapi import APIRouter

from app.api.routes import (
    customers_router,
    dashboard_router,
    inventory_router,
    marketing_router,
    forecast_router,
)

api_router = APIRouter()
api_router.include_router(customers_router)
api_router.include_router(dashboard_router)
api_router.include_router(inventory_router)
api_router.include_router(marketing_router)
api_router.include_router(forecast_router)
