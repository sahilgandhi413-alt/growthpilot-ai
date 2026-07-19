import api from "./api";

export async function exportCSV() {

    const response = await api.get(
        "/export/csv",
        {
            responseType: "blob",
        }
    );

    const url = window.URL.createObjectURL(
        new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;

    link.download = "growthpilot_report.csv";

    link.click();

    window.URL.revokeObjectURL(url);

}