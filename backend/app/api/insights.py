from fastapi import APIRouter


router = APIRouter(
    prefix="/insights",
    tags=["AI Insights"]
)



@router.get("/")
def insights():

    return {

        "insights":[

            "Electronics demand is increasing by 18%",
            "Wireless Mouse stock may run out in 4 days",
            "Customer retention improved by 9%"

        ]

    }