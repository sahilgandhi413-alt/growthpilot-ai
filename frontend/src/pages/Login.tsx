import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/Auth/AuthLayout";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await login({
        email,
        password,
      });

      loginUser(
        data.user,
        data.access_token
      );

      toast.success("Welcome back!");

      navigate("/dashboard");

    } catch (err: any) {
      toast.error(
        err.response?.data?.detail ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>

      <h2 className="text-3xl font-bold text-white mb-8">
        Welcome Back 👋
      </h2>

      <form
        onSubmit={handleLogin}
        className="space-y-6"
      >

        <div>

          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />

        </div>

        <div>

          <label className="block text-slate-300 mb-2">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 pr-12 text-white focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-3.5 text-slate-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

        <button
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3 font-semibold text-white transition disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <div className="text-center text-slate-400">

      <div className="flex justify-between text-sm">

    <Link
        to="/forgot-password"
        className="text-blue-400"
    >
        Forgot Password?
    </Link>

    <Link
        to="/register"
        className="text-blue-400"
    >
        Create Account
    </Link>

</div>

          

        </div>

      </form>

    </AuthLayout>
  );
}