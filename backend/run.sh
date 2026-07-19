#!/bin/bash

mkdir -p output

python src/generate_features.py \
    --data-dir data \
    --out features.csv

python src/predict.py \
    --features features.csv \
    --model pickle/model.pkl \
    --output output/predictions.csv

echo "Submission completed."