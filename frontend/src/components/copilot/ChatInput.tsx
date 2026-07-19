import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Send, Sparkles } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute inset-0 rounded-3xl bg-blue-500/10 blur-2xl" />

      {/* Input */}

      <div className="relative flex items-center rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl transition-all focus-within:border-blue-500">

        {/* AI Icon */}

        <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">

          <Sparkles className="text-white" size={20} />

        </div>

        {/* Text */}

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask GrowthPilot AI anything..."
          className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none text-[16px]"
        />

        {/* Send */}

        <button
          onClick={send}
          disabled={!text.trim()}
          className={`ml-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all ${
            text.trim()
              ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white hover:scale-105"
              : "bg-slate-800 text-slate-500"
          }`}
        >
          <Send size={20} />
        </button>

      </div>

      {/* Hint */}

      <p className="mt-3 text-center text-xs text-slate-500">
        Press <span className="text-slate-300">Enter</span> to send
      </p>

    </div>
  );
}