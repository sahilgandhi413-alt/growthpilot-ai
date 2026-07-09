import api from "./api";

export async function downloadReport() {

    const response = await api.get("/report",{

        responseType:"blob"

    });

    return response.data;

}