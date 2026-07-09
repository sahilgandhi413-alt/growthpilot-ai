from app.services.inventory_service import InventoryService


class RecommendationService:

    @staticmethod
    def recommendations(db):

        recommendations = []

        low_stock = InventoryService.low_stock(db)

        if len(low_stock):

            recommendations.append(

                "Restock low inventory items."

            )

        recommendations.append(

            "Increase marketing for Electronics."

        )

        recommendations.append(

            "Offer discounts to inactive customers."

        )

        return recommendations