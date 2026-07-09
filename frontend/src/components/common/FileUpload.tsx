import { useState } from "react";
import type { AxiosError } from "axios";
import api from "../../services/api";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);
      console.log(response.data);
    } catch (error) {
      const requestError = error as AxiosError;
      console.error(requestError);

      if (requestError.response) {
        alert(`Error ${requestError.response.status}: ${JSON.stringify(requestError.response.data)}`);
      } else {
        alert(requestError.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl p-6">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={upload}
        disabled={loading}
        className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>
    </div>
  );
}
