import { useState } from "react";
import {
  Bot,
  Sparkles,
  BrainCircuit,
} from "lucide-react";

export default function AISettings() {
  const [creativity, setCreativity] = useState(75);
  const [smartMode, setSmartMode] = useState(true);

  return (
    <div className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-xl">

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-2xl bg-violet-600/20 p-3">

          <Bot
            size={24}
            className="text-violet-400"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Preferences
          </h2>

          <p className="text-slate-400">
            Configure GrowthPilot AI
          </p>

        </div>

      </div>

      {/* Creativity */}

      <div className="mb-8">

        <div className="mb-3 flex justify-between">

          <span className="font-medium text-white">
            AI Creativity
          </span>

          <span className="text-violet-400">
            {creativity}%
          </span>

        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={creativity}
          onChange={(e) =>
            setCreativity(Number(e.target.value))
          }
          className="w-full accent-violet-500"
        />

      </div>

      {/* Response */}

      <div className="mb-8">

        <p className="mb-3 font-medium text-white">
          Response Style
        </p>

        <select className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white">

          <option>Concise</option>

          <option>Balanced</option>

          <option>Detailed</option>

        </select>

      </div>

      {/* Smart Suggestions */}

      <div className="mb-8 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-5">

        <div className="flex items-center gap-4">

          <Sparkles
            className="text-yellow-400"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-white">
              Smart Suggestions
            </h3>

            <p className="text-sm text-slate-400">
              AI recommends actions automatically
            </p>

          </div>

        </div>

        <button
          onClick={() => setSmartMode(!smartMode)}
          className={`relative h-7 w-14 rounded-full transition ${
            smartMode
              ? "bg-violet-600"
              : "bg-slate-700"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
              smartMode
                ? "left-8"
                : "left-1"
            }`}
          />
        </button>

      </div>

      {/* AI Model */}

      <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-5">

        <div className="flex items-center gap-4">

          <BrainCircuit
            className="text-cyan-400"
            size={26}
          />

          <div>

            <h3 className="font-semibold text-white">
              Active AI Model
            </h3>

            <p className="text-slate-400">
              GrowthPilot AI Pro v2.5
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}