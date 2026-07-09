from fastapi import APIRouter

router = APIRouter()

@router.get("/customers")
def customers():

    return {

        "summary":{

            "total_customers":1245,
            "vip_customers":86,
            "repeat_customers":342,
            "new_customers":127

        },

        "top_customers":[

            {
                "name":"Rahul Sharma",
                "orders":42,
                "spent":185000
            },

            {
                "name":"Priya Patel",
                "orders":37,
                "spent":162000
            },

            {
                "name":"Amit Singh",
                "orders":29,
                "spent":141000
            }

        ]

    }