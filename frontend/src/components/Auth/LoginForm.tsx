import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import { login as loginApi } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const response = await loginApi({
        email,
        password,
      });

      login(
        response.access_token,
        response.user
      );

      navigate("/dashboard");

    } catch (err: any) {

      setError(
        err?.response?.data?.detail ??
        "Login failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      {error && (

        <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">

          {error}

        </div>

      )}

      <AuthInput
        label="Email Address"
        type="email"
        placeholder="admin@growthpilot.ai"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-slate-300">

          <input
            type="checkbox"
            className="h-4 w-4 accent-cyan-500"
          />

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          Forgot Password?
        </Link>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >

        {loading
          ? "Logging in..."
          : "Login"}

      </button>

      <SocialLogin />

      <div className="text-center text-slate-400">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Register
        </Link>

      </div>

    </form>
  );
}