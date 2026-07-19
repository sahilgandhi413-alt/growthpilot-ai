import { useRef, useState } from "react";
import type { AxiosError } from "axios";
import api from "../../services/api";

interface ErrorResponse {
  detail?: string;
}

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async () => {
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      alert("Only CSV files are allowed.");
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

      setFile(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }

      // Later we can refresh dashboard automatically here
      // window.location.reload();

    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;

      console.error(err);

      if (err.response?.data?.detail) {
        alert(err.response.data.detail);
      } else {
        alert("Upload failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">

      <h3 className="mb-4 text-lg font-semibold text-white">
        Upload Sales CSV
      </h3>

      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
        className="block w-full rounded-lg border border-slate-700 bg-slate-950 p-2 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-600 file:px-4 file:py-2 file:text-white hover:file:bg-cyan-700"
      />

      {file && (
        <p className="mt-3 text-sm text-cyan-400">
          Selected: <span className="font-medium">{file.name}</span>
        </p>
      )}

      <button
        onClick={upload}
        disabled={loading}
        className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Uploading..." : "Upload CSV"}
      </button>

    </div>
  );
}