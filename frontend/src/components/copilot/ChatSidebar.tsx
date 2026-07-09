import { motion } from "framer-motion";
import {
  MessageSquare,
  Clock3,
  Star,
  Trash2,
  Plus,
} from "lucide-react";

const chats = [
  {
    title: "Revenue Analysis",
    time: "2 min ago",
    favorite: true,
  },
  {
    title: "Inventory Forecast",
    time: "18 min ago",
    favorite: false,
  },
  {
    title: "Marketing ROI",
    time: "Today",
    favorite: false,
  },
  {
    title: "Customer Insights",
    time: "Yesterday",
    favorite: true,
  },
  {
    title: "Business Health",
    time: "Yesterday",
    favorite: false,
  },
];

export default function ChatSidebar() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex h-full flex-col rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          Conversations
        </h2>

        <button className="rounded-xl bg-violet-600 p-2 transition hover:bg-violet-500">
          <Plus
            size={18}
            className="text-white"
          />
        </button>

      </div>

      {/* History */}

      <div className="mt-8 flex-1 space-y-3 overflow-y-auto">

        {chats.map((chat) => (

          <motion.div
            key={chat.title}
            whileHover={{ x: 4 }}
            className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-violet-500"
          >
            <div className="flex items-start justify-between">

              <div className="flex gap-3">

                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20">
                  <MessageSquare
                    size={18}
                    className="text-violet-400"
                  />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {chat.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">

                    <Clock3 size={13} />

                    {chat.time}

                  </div>

                </div>

              </div>

              {chat.favorite && (
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              )}

            </div>

          </motion.div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-6 border-t border-slate-800 pt-5">

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 py-3 text-red-400 transition hover:bg-red-500/20">

          <Trash2 size={18} />

          Clear History

        </button>

      </div>

    </motion.div>
  );
}