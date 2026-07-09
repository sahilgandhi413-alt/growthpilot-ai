import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
const messages = [
  {
    role: "user" as const,
    message:
      "Analyze my business performance for this month.",
  },
  {
    role: "assistant" as const,
    message:
      "Your business performed exceptionally well this month. Revenue increased by 18%, customer retention improved to 87%, and inventory turnover was 14% faster than last month.",
  },
];

export default function ChatWindow() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex h-full flex-col rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_20px_70px_rgba(0,0,0,.35)]">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Conversation
          </h2>

          <p className="mt-1 text-slate-400">
            AI understands your complete business
          </p>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2">

          <span className="font-semibold text-emerald-400">
            Online
          </span>

        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 space-y-7 overflow-y-auto p-6">

        {messages.map((msg, index) => (

          <MessageBubble
            key={index}
            role={msg.role}
            message={msg.message}
          />

        ))}

        {/* AI Analysis Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-600/10 via-slate-900 to-cyan-500/10 p-6"
        >

          <div className="flex items-center gap-3">

            <Sparkles
              className="text-yellow-400"
              size={22}
            />

            <h3 className="text-xl font-bold text-white">
              AI Business Analysis
            </h3>

          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-900 p-5">

              <TrendingUp className="text-emerald-400" />

              <h4 className="mt-4 text-3xl font-bold text-white">
                +18%
              </h4>

              <p className="mt-2 text-slate-400">
                Revenue Growth
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 p-5">

              <TrendingUp className="text-cyan-400" />

              <h4 className="mt-4 text-3xl font-bold text-white">
                94%
              </h4>

              <p className="mt-2 text-slate-400">
                Business Health
              </p>

            </div>

            <div className="rounded-2xl bg-slate-900 p-5">

              <AlertTriangle className="text-yellow-400" />

              <h4 className="mt-4 text-3xl font-bold text-white">
                12
              </h4>

              <p className="mt-2 text-slate-400">
                Low Stock Alerts
              </p>

            </div>

          </div>

        </motion.div>

        {/* Recommendation */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-6"
        >

          <h3 className="text-xl font-bold text-white">
            AI Recommendation
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            Increase inventory for Electronics by
            <span className="font-semibold text-cyan-400">
              {" "}15%
            </span>,
            allocate an additional
            <span className="font-semibold text-violet-400">
              {" "}₹45,000
            </span>
            {" "}to Google Ads, and launch a customer
            re-engagement campaign.

            Expected improvement:

            <span className="font-semibold text-emerald-400">
              {" "}+11% Revenue
            </span>

          </p>

          <button className="mt-6 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white transition hover:scale-105">

            Apply Recommendation

            <ArrowRight size={18} />

          </button>

        </motion.div>

        {/* Typing */}

        <TypingIndicator />

        <div ref={bottomRef} />

      </div>

    </div>
  );
}