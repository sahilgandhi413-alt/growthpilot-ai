import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import { register as registerApi } from "../../api/auth";

export default function RegisterForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {

      await registerApi({
        name,
        email,
        password,
      });

      setSuccess(
        "Registration successful! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err: any) {

      setError(
        err?.response?.data?.detail ??
        "Registration failed."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {error && (

        <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-sm text-red-400">

          {error}

        </div>

      )}

      {success && (

        <div className="rounded-xl border border-green-500 bg-green-500/10 p-3 text-sm text-green-400">

          {success}

        </div>

      )}

      <AuthInput
        label="Full Name"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <AuthInput
        label="Email Address"
        type="email"
        placeholder="john@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
        label="Password"
        placeholder="Create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
      >

        {loading
          ? "Creating Account..."
          : "Create Account"}

      </button>

      <SocialLogin />

      <div className="text-center text-slate-400">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 font-semibold text-cyan-400 hover:text-cyan-300"
        >
          Login
        </Link>

      </div>

    </form>

  );

}