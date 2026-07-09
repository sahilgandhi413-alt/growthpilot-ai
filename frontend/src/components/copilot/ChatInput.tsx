import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Paperclip,
  Mic,
  Sparkles,
} from "lucide-react";

const quickActions = [
  "Revenue",
  "Inventory",
  "Customers",
  "Marketing",
];

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="border-t border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6">

      {/* Quick Actions */}

      <div className="mb-4 flex flex-wrap gap-3">

        {quickActions.map((item) => (

          <button
            key={item}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-violet-500 hover:text-white"
          >
            {item}
          </button>

        ))}

      </div>

      {/* Input */}

      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="rounded-3xl border border-slate-700 bg-slate-900 p-4 shadow-xl"
      >

        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask GrowthPilot AI anything about your business..."
          className="w-full resize-none bg-transparent text-white placeholder:text-slate-500 outline-none"
        />

        <div className="mt-5 flex items-center justify-between">

          {/* Left Buttons */}

          <div className="flex gap-3">

            <button className="rounded-xl p-3 text-slate-400 transition hover:bg-slate-800 hover:text-white">

              <Paperclip size={20} />

            </button>

            <button className="rounded-xl p-3 text-slate-400 transition hover:bg-slate-800 hover:text-white">

              <Mic size={20} />

            </button>

            <button className="flex items-center gap-2 rounded-xl bg-violet-600/20 px-4 py-2 text-violet-400">

              <Sparkles size={18} />

              AI Mode

            </button>

          </div>

          {/* Right */}

          <div className="flex items-center gap-5">

            <span className="text-sm text-slate-500">
              {message.length}/500
            </span>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg"
            >
              <Send size={18} />

              Send
            </motion.button>

          </div>

        </div>

      </motion.div>

    </div>
  );
}