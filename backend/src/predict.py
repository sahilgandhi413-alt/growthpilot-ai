import argparse
import joblib
import pandas as pd

parser = argparse.ArgumentParser()

parser.add_argument("--features", default="features.csv")
parser.add_argument("--model", default="pickle/model.pkl")
parser.add_argument("--output", default="output/predictions.csv")

args = parser.parse_args()

model = joblib.load(args.model)

X = pd.read_csv(args.features)

predictions = model.predict(X)

result = X.copy()
result["predicted_sales"] = predictions

result.to_csv(args.output, index=False)

print("Predictions saved.")