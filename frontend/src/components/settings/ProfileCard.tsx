import { motion } from "framer-motion";
import {
  User,
  Mail,
  Building2,
  ShieldCheck,
  Pencil,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500">

            <User
              size={42}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              Sahil Gandhi
            </h2>

            <div className="mt-3 space-y-2">

              <div className="flex items-center gap-2 text-slate-400">

                <Mail size={16} />

                sahil@growthpilot.ai

              </div>

              <div className="flex items-center gap-2 text-slate-400">

                <Building2 size={16} />

                GrowthPilot AI

              </div>

              <div className="flex items-center gap-2 text-emerald-400">

                <ShieldCheck size={16} />

                Administrator

              </div>

            </div>

          </div>

        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">

          <Pencil size={18} />

          Edit Profile

        </button>

      </div>
    </motion.div>
  );
}