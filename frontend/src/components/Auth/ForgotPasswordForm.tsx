import { Link } from "react-router-dom";
import AuthInput from "./AuthInput";

export default function ForgotPasswordForm() {
  return (
    <form className="space-y-6">

      <AuthInput
        label="Email Address"
        type="email"
        placeholder="admin@growthpilot.ai"
      />

      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
      >
        Send Reset Link
      </button>

      <div className="text-center">

        <Link
          to="/login"
          className="text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Login
        </Link>

      </div>

    </form>
  );
}