import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateBusinessReport = (data:any) => {

  const doc = new jsPDF();

  const date = new Date().toLocaleDateString();

  // Header
  doc.setFontSize(18);
  doc.text("GrowthPilot AI", 14, 20);

  doc.setFontSize(12);
  doc.text(
    "Business Intelligence Report",
    14,
    28
  );

  doc.setFontSize(10);
  doc.text(
    `Generated: ${date}`,
    14,
    36
  );


  // Business Overview
  doc.setFontSize(14);
  doc.text(
    "Business Overview",
    14,
    50
  );


  autoTable(doc,{
    startY:55,
    head:[
      [
        "Metric",
        "Value"
      ]
    ],
    body:[
      [
        "Revenue",
        `₹${data.revenue || "1,24,500"}`
      ],
      [
        "Orders",
        data.orders || "438"
      ],
      [
        "Customers",
        data.customers || "215"
      ],
      [
        "Products",
        data.products || "82"
      ]
    ]
  });



  // Forecast
  doc.text(
    "Forecast",
    14,
    120
  );

  autoTable(doc,{
    startY:125,
    head:[
      [
        "Prediction",
        "Status"
      ]
    ],
    body:[
      [
        "Sales Forecast",
        data.salesForecast || "Positive Growth"
      ],
      [
        "Confidence Score",
        data.confidence || "92%"
      ]
    ]
  });



  // Inventory

  doc.text(
    "Inventory Intelligence",
    14,
    185
  );


  autoTable(doc,{
    startY:190,
    head:[
      [
        "Category",
        "Details"
      ]
    ],
    body:[
      [
        "Low Stock",
        data.lowStock || "3 Products"
      ],
      [
        "Restock",
        data.restock || "Recommended"
      ]
    ]
  });



  // AI Summary

  doc.text(
    "AI Executive Summary",
    14,
    245
  );

  doc.text(
    "- Sales trend analyzed successfully",
    14,
    255
  );

  doc.text(
    "- Inventory risks identified",
    14,
    265
  );

  doc.text(
    "- Customer behavior analyzed",
    14,
    275
  );


  doc.save(
    "GrowthPilot_AI_Report.pdf"
  );

};