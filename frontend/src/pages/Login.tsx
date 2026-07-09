import { useState } from "react";
import type { AxiosError } from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Bot } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { login as loginAPI } from "../services/auth";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await loginAPI(form);

      login(data.access_token, data.user);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (err) {
      const requestError = err as AxiosError<{ detail?: string }>;
      toast.error(
        requestError.response?.data?.detail || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#312e81_0%,transparent_40%)]" />

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="relative w-full max-w-md rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,.45)] backdrop-blur-xl"
      >

        {/* Logo */}

        <div className="mb-8 flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-lg">

            <Bot size={38} className="text-white" />

          </div>

        </div>

        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">
            GrowthPilot AI
          </h1>

          <p className="mt-3 text-slate-400">
            Sign in to your business dashboard
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-slate-500"
              />

              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-4 text-white outline-none transition focus:border-indigo-500"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-slate-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-12 text-white outline-none transition focus:border-indigo-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-4 text-slate-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          <button
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

        <div className="mt-8 text-center">

          <span className="text-slate-400">
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Register
          </Link>

        </div>

      </motion.div>

    </div>
  );
}

