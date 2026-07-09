from fastapi import APIRouter

router = APIRouter()


@router.get("/activity")
def activity():

    return [

        {

            "title":"New Order",

            "time":"2 min ago",

        },

        {

            "title":"Inventory Updated",

            "time":"10 min ago",

        },

        {

            "title":"Forecast Generated",

            "time":"30 min ago",

        },

    ]