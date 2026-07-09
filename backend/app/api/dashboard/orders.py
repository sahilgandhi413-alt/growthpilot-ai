from fastapi import APIRouter

router = APIRouter()


@router.get("/orders")
def recent_orders():

    return [

        {
            "id":1001,
            "customer":"John",
            "amount":12000,
            "status":"Completed",
        },

        {
            "id":1002,
            "customer":"Emma",
            "amount":9500,
            "status":"Pending",
        },

    ]