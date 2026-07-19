import { Settings, Save } from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col lg:flex-row justify-between items-center gap-6"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl bg-cyan-500/20">
          <Settings className="text-cyan-400" size={30} />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="text-slate-400 mt-2">
            Customize your GrowthPilot AI experience.
          </p>
        </div>
      </div>

      <button className="flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-500 transition">
        <Save size={18} />
        Save Changes
      </button>
    </motion.section>
  );
}