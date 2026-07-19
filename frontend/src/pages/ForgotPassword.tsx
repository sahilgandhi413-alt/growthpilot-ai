import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/Auth/AuthLayout";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      // Backend API will be connected later
      toast.success("Password reset link sent to your email.");

    } catch {
      toast.error("Unable to send reset link.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>

      <h2 className="text-3xl font-bold text-white mb-6">
        Forgot Password
      </h2>

      <p className="text-slate-400 mb-8">
        Enter your registered email address.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <input
          type="email"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
        />

        <button
          className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold"
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        <div className="text-center">

          <Link
            to="/login"
            className="text-blue-400"
          >
            Back to Login
          </Link>

        </div>

      </form>

    </AuthLayout>
  );
}