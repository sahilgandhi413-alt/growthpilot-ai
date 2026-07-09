from fastapi import APIRouter

router = APIRouter()


@router.get("/category")
def category_chart():

    return [

        {"name":"Electronics","value":45},

        {"name":"Fashion","value":30},

        {"name":"Furniture","value":15},

        {"name":"Accessories","value":10},

    ]