import { motion } from "framer-motion";
import {
  Users,
  Smartphone,
  Monitor,
  MapPin,
  TrendingUp,
} from "lucide-react";

const ageGroups = [
  { label: "18-24", value: 18 },
  { label: "25-34", value: 42 },
  { label: "35-44", value: 24 },
  { label: "45-54", value: 11 },
  { label: "55+", value: 5 },
];

const locations = [
  { city: "Ahmedabad", users: "42K" },
  { city: "Surat", users: "31K" },
  { city: "Vadodara", users: "24K" },
];

const devices = [
  {
    icon: Smartphone,
    name: "Mobile",
    value: 71,
    color: "bg-cyan-500",
  },
  {
    icon: Monitor,
    name: "Desktop",
    value: 29,
    color: "bg-violet-500",
  },
];

export default function AudienceInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-[30px] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Audience Insights
          </h2>

          <p className="mt-1 text-slate-400">
            Customer demographics
          </p>

        </div>

        <div className="rounded-full bg-emerald-500/10 px-4 py-2">

          <span className="text-sm font-semibold text-emerald-400">
            +14%
          </span>

        </div>

      </div>

      {/* Age Distribution */}

      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <Users
            className="text-cyan-400"
            size={18}
          />

          <h3 className="font-semibold text-white">
            Age Distribution
          </h3>

        </div>

        <div className="space-y-4">

          {ageGroups.map((item) => (

            <div key={item.label}>

              <div className="mb-2 flex justify-between">

                <span className="text-sm text-slate-400">
                  {item.label}
                </span>

                <span className="text-sm font-semibold text-white">
                  {item.value}%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${item.value}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Devices */}

      <div className="mt-8">

        <h3 className="mb-4 font-semibold text-white">
          Device Usage
        </h3>

        <div className="space-y-4">

          {devices.map((device) => {

            const Icon = device.icon;

            return (

              <div
                key={device.name}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${device.color}`}
                    >

                      <Icon
                        size={20}
                        className="text-white"
                      />

                    </div>

                    <span className="text-white">
                      {device.name}
                    </span>

                  </div>

                  <span className="font-bold text-white">
                    {device.value}%
                  </span>

                </div>

              </div>

            );

          })}

        </div>

      </div>

      {/* Locations */}

      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <MapPin
            size={18}
            className="text-violet-400"
          />

          <h3 className="font-semibold text-white">
            Top Locations
          </h3>

        </div>

        <div className="space-y-3">

          {locations.map((city) => (

            <div
              key={city.city}
              className="flex items-center justify-between rounded-xl bg-slate-900 p-3"
            >

              <span className="text-slate-300">
                {city.city}
              </span>

              <div className="flex items-center gap-2">

                <TrendingUp
                  size={16}
                  className="text-emerald-400"
                />

                <span className="font-semibold text-white">
                  {city.users}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Score */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-5">

        <p className="text-sm text-slate-400">
          AI Audience Score
        </p>

        <h2 className="mt-2 text-4xl font-bold text-white">
          94%
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-300">
          Your audience quality is excellent.
          AI predicts a higher conversion rate if you
          increase campaigns targeting users aged
          25–34 in Gujarat.
        </p>

      </div>

    </motion.div>
  );
}