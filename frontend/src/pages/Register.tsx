import { useState } from "react";
import type { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Bot,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { register } from "../services/auth";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.success("Account created successfully");

      navigate("/login");
    } catch (err) {
      const requestError = err as AxiosError<{ detail?: string }>;
      toast.error(
        requestError.response?.data?.detail ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#312e81_0%,transparent_40%)]" />

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,.45)] backdrop-blur-xl"
      >

        <div className="flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500">

            <Bot className="text-white" size={38} />

          </div>

        </div>

        <div className="mt-6 text-center">

          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-slate-400">
            Join GrowthPilot AI
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Name */}

          <div className="relative">

            <User
              className="absolute left-4 top-4 text-slate-500"
              size={18}
            />

            <input
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 text-white outline-none focus:border-indigo-500"
            />

          </div>

          {/* Email */}

          <div className="relative">

            <Mail
              className="absolute left-4 top-4 text-slate-500"
              size={18}
            />

            <input
              type="email"
              required
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 text-white outline-none focus:border-indigo-500"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-slate-500"
              size={18}
            />

            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-12 text-white outline-none focus:border-indigo-500"
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

          {/* Confirm Password */}

          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-slate-500"
              size={18}
            />

            <input
              type={showConfirm ? "text" : "password"}
              required
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-4 pl-12 pr-12 text-white outline-none focus:border-indigo-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(!showConfirm)
              }
              className="absolute right-4 top-4 text-slate-400"
            >
              {showConfirm ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

          <button
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>

        <div className="mt-8 text-center">

          <span className="text-slate-400">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ml-2 font-semibold text-cyan-400"
          >
            Login
          </Link>

        </div>

      </motion.div>

    </div>
  );
}

