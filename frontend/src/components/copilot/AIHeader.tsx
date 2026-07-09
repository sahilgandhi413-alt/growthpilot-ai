import { Bot, Sparkles, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AIHeader() {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500">

          <Bot
            size={34}
            className="text-white"
          />

        </div>

        <div>

          <div className="flex items-center gap-2">

            <h1 className="text-3xl font-bold text-white">
              AI Business Copilot
            </h1>

            <Sparkles
              className="text-yellow-400"
              size={18}
            />

          </div>

          <p className="mt-1 text-slate-400">
            Ask anything about your business in natural language
          </p>

        </div>

      </div>

      <div className="flex gap-3">

        <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500">

          <Plus size={18}/>

          New Chat

        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-slate-300 transition hover:border-red-500 hover:text-red-400">

          <Trash2 size={18}/>

          Clear

        </button>

      </div>

    </motion.div>
  );
}