from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.database.database import Base, engine

# Import models before create_all()
import app.models
from app.models.user import User  # noqa: F401
from app.models.uploaded_data import UploadedData

# Routers
from app.api.auth import router as auth_router
from app.api.upload import router as upload_router
from app.api.dashboard import router as dashboard_router
from app.api.forecast import router as forecast_router
from app.api.inventory import router as inventory_router
from app.api.customers import router as customers_router
from app.api.marketing import router as marketing_router
from app.api.report import router as reports_router
from app.api.export import router as export_router

from app.api.settings import router as settings_router

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    debug=settings.debug,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# -----------------------------
# API Routers
# -----------------------------

app.include_router(
    auth_router,
    prefix="/api/v1",
    tags=["Authentication"],
)

app.include_router(
    upload_router,
    prefix="/api/v1",
    tags=["Upload"],
)

app.include_router(
    dashboard_router,
    prefix="/api/v1",
    tags=["Dashboard"],
)

app.include_router(
    forecast_router,
    prefix="/api/v1",
    tags=["Forecast"],
)

app.include_router(
    inventory_router,
    prefix="/api/v1",
    tags=["Inventory"],
)

app.include_router(
    customers_router,
    prefix="/api/v1",
    tags=["Customers"],
)

app.include_router(
    marketing_router,
    prefix="/api/v1",
    tags=["Marketing"],
)

app.include_router(
    reports_router,
    prefix="/api/v1",
    tags=["Reports"],
)

app.include_router(
    export_router,
    prefix="/api/v1",
    tags=["Export"],
)



app.include_router(
    settings_router,
    prefix="/api/v1",
    tags=["Settings"],
)

# -----------------------------
# Health
# -----------------------------

@app.get("/")
def root():
    return {
        "message": "GrowthPilot AI Backend Running 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }