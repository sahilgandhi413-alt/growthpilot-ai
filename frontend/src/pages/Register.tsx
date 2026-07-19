import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/Auth/AuthLayout";
import PasswordStrength from "../components/Auth/PasswordStrength";
import { register } from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const data = await register({
        full_name: fullName,
        company,
        email,
        password,
      });

      loginUser(data.user, data.access_token);

      toast.success("Account created successfully!");

      navigate("/");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.detail || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-8">
        Create Your Account
      </h2>

      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >
        <div>
          <label className="block text-slate-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Company
          </label>

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="GrowthPilot"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 pr-12 text-white focus:border-blue-500 focus:outline-none"
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

          <PasswordStrength password={password} />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Confirm Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Confirm password"
            className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 py-3 font-semibold text-white transition disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <div className="text-center text-slate-400">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-blue-400 hover:text-blue-300"
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}