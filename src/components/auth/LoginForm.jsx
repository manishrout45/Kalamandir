"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 👉 Replace this with your real API call
      if (form.email && form.password) {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/profile");
      }
    } catch (error) {
      alert("Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border">
      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome Back
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Login to access your account
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-black outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-black outline-none transition"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-[42px] text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-black" />
            Remember me
          </label>

          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="text-black hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Register Link */}
      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <span
          onClick={() => router.push("/register")}
          className="font-semibold cursor-pointer hover:underline"
        >
          Create Account
        </span>
      </p>
    </div>
  );
}