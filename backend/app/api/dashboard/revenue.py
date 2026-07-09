from fastapi import APIRouter

router = APIRouter()


@router.get("/revenue")
def revenue_chart():

    return [

        {"month":"Jan","revenue":120000},

        {"month":"Feb","revenue":135000},

        {"month":"Mar","revenue":154000},

        {"month":"Apr","revenue":178000},

        {"month":"May","revenue":212000},

        {"month":"Jun","revenue":248000},

    ]