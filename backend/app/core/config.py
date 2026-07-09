from functools import lru_cache
import json
import os


class Settings:
    def __init__(self) -> None:
        self.app_name = os.getenv("APP_NAME", "GrowthPilot AI")
        self.app_version = os.getenv("APP_VERSION", "0.1.0")
        self.api_prefix = os.getenv("API_PREFIX", "/api/v1")
        self.debug = os.getenv("DEBUG", "false").lower() == "true"
        self.cors_origins = self._parse_cors_origins(
            os.getenv("CORS_ORIGINS", '["http://localhost:3000","http://localhost:5173","http://127.0.0.1:5173"]')
        )

    @staticmethod
    def _parse_cors_origins(value: str) -> list[str]:
        try:
            parsed = json.loads(value)
            if isinstance(parsed, list):
                return [str(origin) for origin in parsed]
        except json.JSONDecodeError:
            pass
        return [origin.strip() for origin in value.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
