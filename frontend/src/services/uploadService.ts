import axios from "axios";

const API = "http://localhost:8000/api/v1";

export async function uploadDataset(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${API}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}