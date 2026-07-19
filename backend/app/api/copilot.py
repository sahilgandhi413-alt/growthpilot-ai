from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.services.copilot_service import CopilotService

router = APIRouter(tags=["AI Copilot"])


class ChatRequest(BaseModel):
    message: str


@router.post("/copilot/chat")
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db),
):
    return CopilotService.chat(request.message, db)