const API = "http://127.0.0.1:8000/api/v1";

export default function ExportButtons() {

  return (
    <div className="flex gap-4">

      <a
        href={`${API}/export/pdf`}
        className="px-5 py-3 rounded-xl bg-red-600 text-white"
      >
        Export PDF
      </a>

      <a
        href={`${API}/export/excel`}
        className="px-5 py-3 rounded-xl bg-green-600 text-white"
      >
        Export Excel
      </a>

      <a
        href={`${API}/export/csv`}
        className="px-5 py-3 rounded-xl bg-blue-600 text-white"
      >
        Export CSV
      </a>

    </div>
  );
}