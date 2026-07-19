import pandas as pd
import argparse
import os

parser = argparse.ArgumentParser()
parser.add_argument("--data-dir", default="data")
parser.add_argument("--out", default="features.csv")
args = parser.parse_args()

excel_file = None

for file in os.listdir(args.data_dir):
    if file.endswith(".xlsx"):
        excel_file = os.path.join(args.data_dir, file)
        break

if excel_file is None:
    raise Exception("No Excel file found in data folder.")

df = pd.read_excel(excel_file, engine="openpyxl")

df.columns = (
    df.columns.astype(str)
    .str.strip()
    .str.lower()
    .str.replace(" ", "_")
)

df["order_date"] = pd.to_datetime(df["order_date"])

df["year"] = df["order_date"].dt.year
df["month"] = df["order_date"].dt.month
df["day"] = df["order_date"].dt.day

features = df[
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

features.to_csv(args.out, index=False)

print("Features generated.")