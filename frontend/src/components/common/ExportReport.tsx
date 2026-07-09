import { downloadReport } from "../../services/report";

export default function ExportReport() {

    async function exportPDF() {

        const blob = await downloadReport();

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = "GrowthPilot_Report.pdf";

        link.click();

    }

    return(

        <button

            onClick={exportPDF}

            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl"

        >

            📄 Export Report

        </button>

    )

}