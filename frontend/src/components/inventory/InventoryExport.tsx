const API = "http://127.0.0.1:8000/api/v1";

export default function InventoryExport() {
  return (
    <div className="flex gap-4">

      <a
        href={`${API}/export/inventory/pdf`}
        className="px-5 py-3 rounded-xl bg-red-600 text-white"
      >
        PDF
      </a>

      <a
        href={`${API}/export/inventory/excel`}
        className="px-5 py-3 rounded-xl bg-green-600 text-white"
      >
        Excel
      </a>

      <a
        href={`${API}/export/inventory/csv`}
        className="px-5 py-3 rounded-xl bg-blue-600 text-white"
      >
        CSV
      </a>

    </div>
  );
}