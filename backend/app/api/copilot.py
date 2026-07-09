from fastapi import APIRouter


router = APIRouter(
    prefix="/copilot",
    tags=["AI Copilot"]
)



@router.post("/")
def chat(message:str):

    response = f"""
    AI Analysis:

    Your query:
    {message}


    Recommendation:
    Optimize inventory based on current sales trends.
    """

    return {

        "reply":response

    }