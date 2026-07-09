from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.api.auth import router as auth_router
from app.api.charts import router as charts_router
from app.api.copilot import router as copilot_router
from app.api.customers import router as legacy_customers_router
from app.api.dashboard.dashboard import router as dashboard_router
from app.api.forecast import router as forecast_router
from app.api.insights import router as insights_router
from app.api.inventory import router as legacy_inventory_router
from app.api.marketing import router as legacy_marketing_router
from app.api.report import router as report_router
from app.api.router import api_router
from app.api.settings import router as settings_router
from app.api.upload import router as upload_router
from app.core.config import get_settings
from app.database.database import Base, engine
import app.models  # noqa: F401 - registers SQLAlchemy models before create_all

settings = get_settings()


def ensure_sqlite_compatibility() -> None:
    if not engine.url.drivername.startswith("sqlite"):
        return

    required_sales_columns = {
        "date": "TEXT",
        "customer": "TEXT DEFAULT ''",
        "stock": "INTEGER DEFAULT 0",
    }

    with engine.begin() as connection:
        rows = connection.execute(text("PRAGMA table_info(sales)")).fetchall()
        existing_columns = {row[1] for row in rows}

        for column, column_type in required_sales_columns.items():
            if column not in existing_columns:
                connection.execute(text(f"ALTER TABLE sales ADD COLUMN {column} {column_type}"))


def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.app_name,
        version=settings.app_version,
        debug=settings.debug,
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    Base.metadata.create_all(bind=engine)
    ensure_sqlite_compatibility()

    app.include_router(auth_router)
    app.include_router(charts_router)
    app.include_router(copilot_router)
    app.include_router(dashboard_router)
    app.include_router(forecast_router)
    app.include_router(insights_router)
    app.include_router(legacy_customers_router)
    app.include_router(legacy_inventory_router)
    app.include_router(legacy_marketing_router)
    app.include_router(report_router)
    app.include_router(settings_router)
    app.include_router(upload_router)
    app.include_router(api_router, prefix=settings.api_prefix)

    @app.get("/health", tags=["health"])
    def health_check() -> dict[str, str]:
        return {"status": "ok"}

    return app


app = create_app()
