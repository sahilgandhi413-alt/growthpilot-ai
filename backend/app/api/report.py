from fastapi import APIRouter
from fastapi.responses import FileResponse

from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet

router = APIRouter()


@router.get("/report")
def report():

    pdf = "GrowthPilot_Report.pdf"

    doc = SimpleDocTemplate(pdf, pagesize=letter)

    styles = getSampleStyleSheet()

    story = []

    story.append(Paragraph("<b>GrowthPilot AI</b>", styles["Title"]))

    story.append(Paragraph("Business Analytics Report", styles["Heading1"]))

    story.append(Paragraph("Revenue : ₹142,500", styles["Normal"]))

    story.append(Paragraph("Orders : 3214", styles["Normal"]))

    story.append(Paragraph("Products : 158", styles["Normal"]))

    story.append(Paragraph("Growth : 18%", styles["Normal"]))

    story.append(Paragraph("Top Category : Electronics", styles["Normal"]))

    story.append(Paragraph("Recommendation:", styles["Heading2"]))

    story.append(
        Paragraph(
            "Increase inventory for high-demand electronics and invest more in digital marketing.",
            styles["BodyText"],
        )
    )

    doc.build(story)

    return FileResponse(
        pdf,
        filename="GrowthPilot_Report.pdf",
        media_type="application/pdf",
    )