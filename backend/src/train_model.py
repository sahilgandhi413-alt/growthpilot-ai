import os
import joblib
import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestRegressor

# Load dataset
df = pd.read_excel(
    "data/GrowthPilot_Sales_Dataset.xlsx",
    engine="openpyxl"
)

# Clean column names
df.columns = (
    df.columns.astype(str)
    .str.strip()
    .str.lower()
    .str.replace(" ", "_")
)

print("Columns:", df.columns.tolist())

required = [
    "quantity",
    "profit",
    "category",
    "region",
    "product",
    "sales",
    "order_date",
]

missing = [c for c in required if c not in df.columns]

if missing:
    raise Exception(f"Missing columns: {missing}")

# Convert date
df["order_date"] = pd.to_datetime(df["order_date"])

df["year"] = df["order_date"].dt.year
df["month"] = df["order_date"].dt.month
df["day"] = df["order_date"].dt.day

X = df[
    [
        "quantity",
        "profit",
        "category",
        "region",
        "product",
        "year",
        "month",
        "day",
    ]
]

y = df["sales"]

categorical = ["category", "region", "product"]
numeric = ["quantity", "profit", "year", "month", "day"]

preprocessor = ColumnTransformer(
    [
        ("cat", OneHotEncoder(handle_unknown="ignore"), categorical),
        ("num", "passthrough", numeric),
    ]
)

model = Pipeline(
    [
        ("prep", preprocessor),
        ("model", RandomForestRegressor(
            n_estimators=100,
            random_state=42
        )),
    ]
)

print("Training model...")

model.fit(X, y)

print("Training complete.")

os.makedirs("pickle", exist_ok=True)

joblib.dump(model, "pickle/model.pkl")

print("✅ Model saved to pickle/model.pkl")