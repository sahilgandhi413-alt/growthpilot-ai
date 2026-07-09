from fastapi import APIRouter

router = APIRouter()

@router.get("/inventory")
def get_inventory():
    return {
        "summary": {
            "total_products": 158,
            "low_stock": 12,
            "fast_moving": 28,
            "slow_moving": 16
        },
        "products": [
            {
                "name": "Laptop",
                "stock": 8,
                "status": "Low Stock",
                "recommendation": "Restock 25 units"
            },
            {
                "name": "Mouse",
                "stock": 65,
                "status": "Healthy",
                "recommendation": "No action required"
            },
            {
                "name": "Keyboard",
                "stock": 120,
                "status": "Overstock",
                "recommendation": "Reduce purchase"
            },
            {
                "name": "Monitor",
                "stock": 14,
                "status": "Low Stock",
                "recommendation": "Restock 20 units"
            }
        ]
    }