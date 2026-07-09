import {
  Download,
  RotateCcw,
  Trash2,
} from "lucide-react";

export default function DangerZone() {
  return (
    <div className="rounded-[30px] border border-red-500/30 bg-red-500/5 p-8">

      <h2 className="mb-2 text-2xl font-bold text-red-400">
        Danger Zone
      </h2>

      <p className="mb-8 text-slate-400">
        These actions are irreversible. Please proceed carefully.
      </p>

      <div className="grid gap-5 md:grid-cols-3">

        <button className="flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white transition hover:border-cyan-500">

          <Download size={20} />

          Export Data

        </button>

        <button className="flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white transition hover:border-yellow-500">

          <RotateCcw size={20} />

          Reset AI Memory

        </button>

        <button className="flex items-center justify-center gap-3 rounded-2xl border border-red-500 bg-red-500/10 p-5 font-semibold text-red-400 transition hover:bg-red-500/20">

          <Trash2 size={20} />

          Delete Workspace

        </button>

      </div>

    </div>
  );
}