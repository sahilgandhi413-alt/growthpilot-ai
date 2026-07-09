from fastapi import APIRouter

router = APIRouter()

@router.get("/marketing")
def marketing():

    return {

        "summary":{

            "campaigns":12,
            "marketing_spend":250000,
            "revenue_generated":890000,
            "roi":256

        },

        "campaigns":[

            {
                "name":"Google Ads",
                "budget":100000,
                "sales":350000,
                "roi":"250%"
            },

            {
                "name":"Facebook Ads",
                "budget":80000,
                "sales":270000,
                "roi":"237%"
            },

            {
                "name":"Instagram",
                "budget":70000,
                "sales":270000,
                "roi":"286%"
            }

        ]

    }