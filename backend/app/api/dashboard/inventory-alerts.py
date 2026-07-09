from fastapi import APIRouter

router = APIRouter()


@router.get("/inventory-alerts")
def alerts():

    return [

        {

            "product":"Macbook Pro",

            "stock":4,

            "status":"Critical",

        },

        {

            "product":"AirPods",

            "stock":8,

            "status":"Low",

        },

    ]