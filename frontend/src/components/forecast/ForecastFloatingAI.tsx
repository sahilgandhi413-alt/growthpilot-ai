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
  "Why will revenue increase?",
  "Show inventory advice",
  "Which category is strongest?",
  "Summarize this forecast",
];

export default function ForecastFloatingAI() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "👋 Welcome to GrowthPilot AI. I can explain forecasts, revenue trends, inventory risks and business recommendations.",
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

    if (q.includes("revenue"))
      return "Revenue is projected to increase by 18% primarily due to stronger Electronics sales, repeat customer growth and seasonal demand.";

    if (q.includes("inventory"))
      return "Inventory levels are healthy for the next 12 days. Electronics should be restocked soon to avoid stockouts.";

    if (q.includes("category"))
      return "Electronics continues to be the strongest-performing category with the highest projected growth.";

    if (q.includes("summary"))
      return "Overall business outlook is positive with 96% model confidence, projected revenue growth of 18%, and low operational risk.";

    return "GrowthPilot AI predicts steady business growth with healthy revenue trends and stable inventory performance.";
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user" as const,
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

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
      {/* Floating Button */}

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
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
        z-50
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
        <Bot
          className="text-white"
          size={30}
        />

        <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-slate-950" />
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
            transition={{
              duration: 0.25,
            }}
            className="
fixed
bottom-6
right-6
z-50
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
            {/* Glow */}

            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Header */}

            <div className="relative border-b border-slate-800 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Bot
                      className="text-white"
                      size={28}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white">
                      GrowthPilot AI
                    </h2>

                    <div className="mt-1 flex items-center gap-2 text-indigo-100">
                      <Circle
                        size={10}
                        className="fill-emerald-400 text-emerald-400"
                      />

                      <span className="text-sm">
                        AI Online • 96% Confidence
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
                          text: "Conversation cleared. How can I help you today?",
                        },
                      ])
                    }
                    className="rounded-xl p-2 hover:bg-white/10"
                  >
                    <RotateCcw
                      size={18}
                      className="text-white"
                    />
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl p-2 hover:bg-white/10"
                  >
                    <X
                      size={20}
                      className="text-white"
                    />
                  </button>
                </div>
              </div>
            </div>
                        {/* Chat Messages */}

            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="mr-3 mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500">
                      <Bot size={18} className="text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-3 ${
                      msg.role === "assistant"
                        ? "bg-slate-800 text-slate-100"
                        : "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                    }`}
                  >
                    <p className="leading-7 text-sm">
                      {msg.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}

              {typing && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500">
                    <Bot
                      size={18}
                      className="text-white"
                    />
                  </div>

                  <div className="rounded-2xl bg-slate-800 px-5 py-4">
                    <div className="flex gap-2">
                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                        }}
                        className="h-2 w-2 rounded-full bg-indigo-400"
                      />

                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          delay: 0.2,
                          repeat: Infinity,
                          duration: 1,
                        }}
                        className="h-2 w-2 rounded-full bg-indigo-400"
                      />

                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          delay: 0.4,
                          repeat: Infinity,
                          duration: 1,
                        }}
                        className="h-2 w-2 rounded-full bg-indigo-400"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}

            <div className="border-t border-slate-800 px-5 pt-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => sendMessage(item)}
                    className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900
                    px-3
                    py-2
                    text-xs
                    text-slate-300
                    transition
                    hover:border-indigo-500
                    hover:bg-indigo-500/10
                    hover:text-white
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Input */}

              <div className="mb-5 flex items-center gap-3">
                <input
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter")
                      sendMessage(input);
                  }}
                  placeholder="Ask GrowthPilot AI..."
                  className="
                  flex-1
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-4
                  py-3
                  text-white
                  placeholder:text-slate-500
                  outline-none
                  transition
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                  "
                />

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    sendMessage(input)
                  }
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-cyan-500
                  "
                >
                  <Send
                    className="text-white"
                    size={20}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}