from fastapi import APIRouter


router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"]
)


@router.get("/")
def forecast():
    return {
        "prediction": [
            {"month": "July", "sales": 45000},
            {"month": "August", "sales": 52000},
            {"month": "September", "sales": 61000},
        ],
        "confidence": 92,
    }


@router.post("/chat")
def forecast_chat(payload: dict):
    question = payload.get("question", "")
    return {
        "reply": f"Forecast insight: {question or 'Sales are expected to grow steadily.'}",
        "recommendation": "Keep high-demand products stocked and review marketing spend weekly.",
    }
