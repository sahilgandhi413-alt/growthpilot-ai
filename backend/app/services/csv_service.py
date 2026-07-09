import pandas as pd
from sqlalchemy.orm import Session

from app.models.sales import Sales


REQUIRED_COLUMNS = [
    "date",
    "product",
    "category",
    "customer",
    "quantity",
    "revenue",
    "stock",
]


class CSVService:

    @staticmethod
    def validate(df: pd.DataFrame):

        missing = [
            col for col in REQUIRED_COLUMNS
            if col not in df.columns
        ]

        if missing:
            raise ValueError(
                f"Missing columns: {', '.join(missing)}"
            )

    @staticmethod
    def clean(df: pd.DataFrame):

        df = df.dropna()

        df["quantity"] = df["quantity"].astype(int)
        df["revenue"] = df["revenue"].astype(float)
        df["stock"] = df["stock"].astype(int)

        return df

    @staticmethod
    def save(df: pd.DataFrame, db: Session):

        for _, row in df.iterrows():

            sale = Sales(
                date=row["date"],
                product=row["product"],
                category=row["category"],
                customer=row["customer"],
                quantity=row["quantity"],
                revenue=row["revenue"],
                stock=row["stock"],
            )

            db.add(sale)

        db.commit()
