import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  X,
  RotateCcw,
  Circle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  text: string;
}
const suggestions = [
  "Show sales forecast",
  "Predict next month's revenue",
  "Which products will grow?",
  "Give forecast summary",
];

export default function ForecastAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
"👋 Welcome to GrowthPilot Forecast AI. I can predict future sales, forecast revenue, analyze demand trends, identify growth opportunities, and provide AI-powered business forecasts.",
        
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const fakeReply = (question: string) => {
  const q = question.toLowerCase();

  if (q.includes("forecast") || q.includes("sales")) {
    return "📈 Sales are projected to increase by 14% over the next month, with Electronics leading overall growth.";
  }

  if (q.includes("revenue") || q.includes("next month")) {
    return "💰 Estimated revenue for next month is ₹3.45M with a confidence score of 94%.";
  }

  if (q.includes("product") || q.includes("grow") || q.includes("demand")) {
    return "🚀 Smart Watches, Gaming Accessories, Wireless Earbuds, and Premium Laptops are expected to experience the highest demand.";
  }

  if (q.includes("summary") || q.includes("overview")) {
    return "📊 Forecast Summary: Revenue +14%, Orders +11%, Customer Growth +9%, Forecast Confidence 94%, Business Outlook: Positive.";
  }

  if (q.includes("trend")) {
    return "📈 Current trends indicate sustained month-over-month growth with increased seasonal demand.";
  }

  if (q.includes("risk")) {
    return "⚠️ Forecast risk is low. Electronics demand may fluctuate during promotional campaigns.";
  }

  return "🤖 Forecast AI predicts healthy business growth with increasing sales, stable demand, and strong revenue performance over the coming weeks.";
};

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: fakeReply(text),
        },
      ]);
    }, 1200);
  };

  return (
    <>
      {/* Floating AI Button */}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        onClick={() => setOpen(true)}
        className="
        fixed
        bottom-8
        right-8
        z-[9999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-cyan-500
        shadow-[0_0_40px_rgba(99,102,241,0.45)]
        "
      >
        <Bot size={30} className="text-white" />

        <span
          className="
        absolute
        -right-1
        -top-1
        h-4
        w-4
        rounded-full
        bg-emerald-400
        ring-4
        ring-slate-950
        "
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 60,
              scale: 0.95,
            }}
            className="
      fixed
      bottom-6
      right-6
      z-[9999]
      flex
      h-[min(700px,calc(100vh-120px))]
      w-[420px]
      max-w-[calc(100vw-32px)]
      flex-col
      overflow-hidden
      rounded-3xl
      border
      border-slate-700
      bg-slate-950/95
      backdrop-blur-xl
      shadow-2xl
      "
          >
            {/* Header */}

            <div
              className="
      border-b
      border-slate-800
      bg-gradient-to-r
      from-indigo-600
      via-violet-600
      to-cyan-600
      p-6
      "
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div
                    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-white/10
      "
                  >
                    <Bot size={28} className="text-white" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Forecast AI
                    </h2>

                    <div className="flex items-center gap-2 text-indigo-100">
                      <Circle
                        size={10}
                        className="fill-emerald-400 text-emerald-400"
                      />

                      <span className="text-sm">
                        AI Online • 95% Accuracy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setMessages([
                        {
                          role: "assistant",
                          text: "forecast conversation cleared. How can I help?",
                        },
                      ])
                    }
                  >
                    <RotateCcw className="text-white" />
                  </button>

                  <button onClick={() => setOpen(false)}>
                    <X className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}

            <div
              className="
      flex-1
      overflow-y-auto
      space-y-5
      px-5
      py-5
      "
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div
                      className="
      mr-3
      h-9
      w-9
      rounded-full
      bg-gradient-to-r
      from-indigo-500
      to-violet-500
      flex
      items-center
      justify-center
      "
                    >
                      <Bot size={18} className="text-white" />
                    </div>
                  )}

                  <div
                    className={`
      max-w-[78%]
      rounded-2xl
      px-4
      py-3
      ${
        msg.role === "assistant"
          ? "bg-slate-800 text-slate-100"
          : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
      }
      `}
                  >
                    <p className="text-sm leading-7">{msg.text}</p>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-3 items-center">
                  <div
                    className="
      h-9
      w-9
      rounded-full
      bg-gradient-to-r
      from-indigo-500
      to-violet-500
      flex
      items-center
      justify-center
      "
                  >
                    <Bot size={18} className="text-white" />
                  </div>

                  <div className="bg-slate-800 px-5 py-4 rounded-2xl">
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className="
      h-2
      w-2
      rounded-full
      bg-indigo-400
      animate-bounce
      "
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}

            <div className="border-t border-slate-800 px-5 py-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="
      rounded-full
      border
      border-slate-700
      bg-slate-900
      px-3
      py-2
      text-xs
      text-slate-300
      "
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage(input);
                  }}
                  placeholder="Ask Forecast  AI..."
                  className="
      flex-1
      rounded-2xl
      border
      border-slate-700
      bg-slate-900
      px-4
      py-3
      text-white
      "
                />

                <button
                  onClick={() => sendMessage(input)}
                  className="
      h-12
      w-12
      rounded-2xl
      bg-gradient-to-r
      from-indigo-600
      via-violet-600
      to-cyan-500
      flex
      items-center
      justify-center
      "
                >
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}