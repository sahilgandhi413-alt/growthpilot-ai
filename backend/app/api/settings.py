from fastapi import APIRouter

from app.core.config import get_settings

router = APIRouter(prefix="/settings", tags=["Settings"])


@router.get("")
def read_settings():
    settings = get_settings()
    return {
        "app_name": settings.app_name,
        "app_version": settings.app_version,
        "api_prefix": settings.api_prefix,
        "debug": settings.debug,
    }
