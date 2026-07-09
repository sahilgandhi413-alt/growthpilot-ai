import { motion } from "framer-motion";
import { Settings2, Sparkles } from "lucide-react";

export default function SettingsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500">

          <Settings2
            size={32}
            className="text-white"
          />

        </div>

        <div>

          <div className="flex items-center gap-2">

            <h1 className="text-4xl font-bold text-white">
              Settings
            </h1>

            <Sparkles
              className="text-yellow-400"
              size={18}
            />

          </div>

          <p className="mt-2 text-slate-400">
            Manage your business preferences, AI configuration and account settings.
          </p>

        </div>

      </div>
    </motion.div>
  );
}