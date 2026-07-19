from fastapi import APIRouter, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
import pandas as pd

from app.database.dependencies import get_db
from app.models.uploaded_data import UploadedData

router = APIRouter(tags=["Upload"])


@router.post("/upload")
async def upload_dataset(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No file selected."
        )

    filename = file.filename.lower()

    try:

        # ----------------------------
        # Read File
        # ----------------------------

        if filename.endswith(".csv"):

            df = pd.read_csv(file.file)

        elif filename.endswith(".xlsx") or filename.endswith(".xls"):

            df = pd.read_excel(file.file)

        else:

            raise HTTPException(
                status_code=400,
                detail="Only CSV, XLSX and XLS files are supported."
            )

        # ----------------------------
        # Empty Check
        # ----------------------------

        if df.empty:

            raise HTTPException(
                status_code=400,
                detail="Uploaded dataset is empty."
            )

        # ----------------------------
        # Clean Column Names
        # ----------------------------

        df.columns = (
            df.columns
            .str.strip()
            .str.lower()
            .str.replace(" ", "_")
        )

        # ----------------------------
        # Required Columns
        # ----------------------------

        required_columns = [
            "order_id",
            "product",
            "category",
            "customer",
            "quantity",
            "sales",
            "profit",
            "region",
            "order_date",
        ]

        missing = [
            col
            for col in required_columns
            if col not in df.columns
        ]

        if missing:

            raise HTTPException(
                status_code=400,
                detail=f"Missing columns: {missing}"
            )

        # ----------------------------
        # Replace NaN
        # ----------------------------

        df = df.fillna("")

        # ----------------------------
        # Delete Previous Dataset
        # ----------------------------

        db.query(UploadedData).delete()

        # ----------------------------
        # Insert New Dataset
        # ----------------------------

        inserted = 0

        for _, row in df.iterrows():

            item = UploadedData(

                order_id=str(row["order_id"]),

                product=str(row["product"]),

                category=str(row["category"]),

                customer=str(row["customer"]),

                quantity=int(float(row["quantity"])),

                sales=float(row["sales"]),

                profit=float(row["profit"]),

                region=str(row["region"]),

                order_date=str(row["order_date"]),

            )

            db.add(item)

            inserted += 1

        db.commit()

        # ----------------------------
        # Response
        # ----------------------------

        return {

            "success": True,

            "message": "Dataset uploaded successfully.",

            "rows_processed": inserted,

            "columns": list(df.columns),

            "preview": df.head(5).to_dict(
                orient="records"
            ),

            "modules_updated": [

                "Dashboard",

                "Forecast",

                "Inventory",

                "Customers",

                "Marketing",

                "AI Copilot"

            ]

        }

    except HTTPException:
        raise

    except Exception as e:

        db.rollback()

        raise HTTPException(
            status_code=500,
            detail=f"Upload failed : {str(e)}"
        )