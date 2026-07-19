import { Bot, Plus, Wifi } from "lucide-react";

interface Props {
  onNewChat: () => void;
}

export default function ChatHeader({ onNewChat }: Props) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30">
          <Bot size={28} className="text-white" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">
            GrowthPilot AI
          </h1>

          <div className="mt-1 flex items-center gap-2 text-green-400">
            <Wifi size={14} />
            <span className="text-sm font-medium">
              Online
            </span>
          </div>
        </div>

      </div>

      {/* Right */}

      <button
        onClick={onNewChat}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-5
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
          hover:shadow-cyan-500/30
        "
      >
        <Plus size={18} />
        New Chat
      </button>

    </div>
  );
}