from fastapi import APIRouter

router = APIRouter()


@router.get("/insights")
def insights():

    return {

        "summary":

        "Revenue increased by 18%. Electronics remains the highest-performing category. Three products require immediate restocking."

    }