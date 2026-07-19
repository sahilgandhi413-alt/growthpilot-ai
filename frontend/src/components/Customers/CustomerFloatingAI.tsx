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
  "Show customer insights",
  "Who are the top customers?",
  "Analyze customer retention",
  "Give customer summary",
];

export default function CustomerAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
"👋 Welcome to GrowthPilot Customer AI. I can analyze customer behavior, identify top customers, track retention, detect churn risk, and provide AI-powered customer insights."

        
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

  if (
    q.includes("insight") ||
    q.includes("customer")
  ) {
    return "👥 Customer Insights: Active customers increased by 9% this month, with repeat purchases contributing significantly to overall revenue.";
  }

  if (
    q.includes("top") ||
    q.includes("best")
  ) {
    return "🏆 Top Customers: Premium members contribute nearly 38% of total revenue and maintain the highest purchase frequency.";
  }

  if (
    q.includes("retention") ||
    q.includes("loyal")
  ) {
    return "🔄 Customer Retention: Retention rate is 87%, with strong loyalty among returning customers. Personalized offers can further improve engagement.";
  }

  if (
    q.includes("churn") ||
    q.includes("risk")
  ) {
    return "⚠️ Churn Risk: Approximately 6% of customers show declining engagement. Targeted campaigns are recommended to improve retention.";
  }

  if (
    q.includes("summary") ||
    q.includes("overview")
  ) {
    return "📊 Customer Summary: 764 Active Customers, 87% Retention Rate, 6% Churn Risk, Customer Satisfaction 4.7/5, Revenue Growth +9%.";
  }

  return "🤖 Customer AI indicates healthy customer growth, strong retention, and positive engagement across your customer base.";
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
                       Customers AI
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
                          text: "customer conversation cleared. How can I help?",
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
                  placeholder="Ask Customers  AI..."
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