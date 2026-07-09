from fastapi import APIRouter


router = APIRouter(
    prefix="/charts",
    tags=["Charts"]
)


@router.get("/sales")
def sales_chart():

    return {

        "labels":[
            "Jan",
            "Feb",
            "Mar",
            "Apr"
        ],

        "values":[
            20000,
            30000,
            42000,
            50000
        ]

    }