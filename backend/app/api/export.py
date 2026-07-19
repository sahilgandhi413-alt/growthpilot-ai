from io import BytesIO

import pandas as pd
from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.models.uploaded_data import UploadedData

router = APIRouter(tags=["Export"])


def get_dataframe(db: Session):

    rows = db.query(UploadedData).all()

    data = []

    for row in rows:
        data.append({
            "Date": row.date,
            "Product": row.product,
            "Category": row.category,
            "Customer": row.customer,
            "Quantity": row.quantity,
            "Revenue": row.revenue,
            "Stock": row.stock,
        })

    return pd.DataFrame(data)


@router.get("/export/csv")
def export_csv(db: Session = Depends(get_db)):

    df = get_dataframe(db)

    stream = BytesIO()
    df.to_csv(stream, index=False)

    stream.seek(0)

    return StreamingResponse(
        stream,
        media_type="text/csv",
        headers={
            "Content-Disposition":
            "attachment; filename=growthpilot_report.csv"
        },
    )


@router.get("/export/excel")
def export_excel(db: Session = Depends(get_db)):

    df = get_dataframe(db)

    stream = BytesIO()

    with pd.ExcelWriter(stream, engine="openpyxl") as writer:
        df.to_excel(writer, index=False)

    stream.seek(0)

    return StreamingResponse(
        stream,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition":
            "attachment; filename=growthpilot_report.xlsx"
        },
    )