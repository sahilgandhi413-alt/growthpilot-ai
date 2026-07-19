import {
  FileText,
  FileSpreadsheet,
  Download,
  Sparkles,
} from "lucide-react";

export default function MarketingExport() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Export Marketing Reports
          </h2>

          <p className="mt-2 text-slate-400">
            Download campaign analytics and AI-generated reports.
          </p>

        </div>

        <div className="flex flex-wrap gap-4">

          {/* PDF */}

          <button
            className="flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition shadow-lg"
          >
            <FileText size={20} />
            Export PDF
          </button>

          {/* Excel */}

          <button
            className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition shadow-lg"
          >
            <FileSpreadsheet size={20} />
            Export Excel
          </button>

          {/* AI Report */}

          <button
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-semibold hover:opacity-90 transition shadow-lg"
          >
            <Sparkles size={20} />
            AI Report
          </button>

          {/* Download */}

          <button
            className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-white font-semibold hover:bg-slate-700 transition"
          >
            <Download size={20} />
            Download
          </button>

        </div>

      </div>

    </div>
  );
}