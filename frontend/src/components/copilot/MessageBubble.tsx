import { Bot, User, Copy, Check } from "lucide-react";
import { useState } from "react";

interface Props {
  role: "user" | "assistant";
  message: string;
}

export default function MessageBubble({
  role,
  message,
}: Props) {
  const isAI = role === "assistant";
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(message);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div
      className={`mb-8 flex ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-4xl gap-4 ${
          isAI ? "" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg ${
            isAI
              ? "bg-gradient-to-br from-blue-600 to-cyan-500"
              : "bg-gradient-to-br from-emerald-500 to-green-600"
          }`}
        >
          {isAI ? (
            <Bot className="text-white" size={22} />
          ) : (
            <User className="text-white" size={22} />
          )}
        </div>

        {/* Bubble */}

        <div
          className={`rounded-3xl border px-6 py-5 shadow-xl ${
            isAI
              ? "border-slate-700 bg-slate-800"
              : "border-blue-500/30 bg-blue-600"
          }`}
        >
          {/* Header */}

          <div className="mb-4 flex items-center justify-between">

            <span
              className={`font-semibold ${
                isAI
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {isAI
                ? "GrowthPilot AI"
                : "You"}
            </span>

            {isAI && (
              <button
                onClick={copy}
                className="rounded-lg p-2 hover:bg-slate-700 transition"
              >
                {copied ? (
                  <Check
                    size={16}
                    className="text-green-400"
                  />
                ) : (
                  <Copy
                    size={16}
                    className="text-slate-400"
                  />
                )}
              </button>
            )}

          </div>

          {/* Divider */}

          {isAI && (
            <div className="mb-5 h-px bg-slate-700" />
          )}

          {/* Message */}

          <div className="whitespace-pre-wrap leading-8 text-[15px] text-slate-200">
            {message}
          </div>

          {/* Footer */}

          <div className="mt-5 flex justify-end">

            <span className="text-xs text-slate-500">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}