from fastapi import APIRouter
from app.services.inventory_service import analyze_inventory

router = APIRouter()

@router.get("/inventory")
def inventory():

    data = analyze_inventory()

    if data is None:
        return {
            "error": "Upload CSV first"
        }

    return data