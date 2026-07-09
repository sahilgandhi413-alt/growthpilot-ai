from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
import pandas as pd

from app.database.dependencies import get_db
from app.services.csv_service import CSVService

router = APIRouter()


@router.post("/upload")
async def upload_csv(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):

    df = pd.read_csv(file.file)

    CSVService.validate(df)

    df = CSVService.clean(df)

    CSVService.save(df, db)

    return {
        "success": True,
        "rows": len(df),
        "message": "CSV uploaded successfully."
    }