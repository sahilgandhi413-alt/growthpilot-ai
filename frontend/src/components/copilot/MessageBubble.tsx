import { motion } from "framer-motion";
import {
  Bot,
  User,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

interface Props {
  role: "user" | "assistant";
  message: string;
  time?: string;
}

export default function MessageBubble({
  role,
  message,
  time = "Just now",
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(message);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  const isAI = role === "assistant";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-[85%] gap-4 ${
          isAI ? "" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
            isAI
              ? "bg-gradient-to-br from-violet-600 to-cyan-500"
              : "bg-slate-700"
          }`}
        >
          {isAI ? (
            <Bot
              size={24}
              className="text-white"
            />
          ) : (
            <User
              size={22}
              className="text-white"
            />
          )}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-3xl border p-5 shadow-xl ${
            isAI
              ? "border-violet-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
              : "border-slate-700 bg-slate-800"
          }`}
        >
          {/* Header */}

          <div className="mb-4 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="font-semibold text-white">
                {isAI ? "GrowthPilot AI" : "You"}
              </span>

              {isAI && (
                <Sparkles
                  size={15}
                  className="text-yellow-400"
                />
              )}

            </div>

            <span className="text-xs text-slate-500">
              {time}
            </span>

          </div>

          {/* Message */}

          <div className="leading-8 whitespace-pre-wrap text-slate-300">
            {message}
          </div>

          {/* Footer */}

          {isAI && (
            <div className="mt-5 flex items-center justify-end">

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-400 transition hover:border-violet-500 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check
                      size={16}
                      className="text-emerald-400"
                    />

                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />

                    Copy
                  </>
                )}
              </button>

            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}