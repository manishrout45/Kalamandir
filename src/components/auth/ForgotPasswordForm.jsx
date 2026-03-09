"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      return setError("Email is required");
    }

    try {
      setLoading(true);

      console.log("Reset request for:", email);

      setTimeout(() => {
        router.push(`/otp-verify?email=${email}`);
      }, 1000);

    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Forgot Password
      </h2>

      <p className="text-sm text-gray-500 text-center mb-6">
        Enter your email to receive a password reset OTP.
      </p>

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-6">
        Remember your password?{" "}
        <span
          onClick={() => router.push("/login")}
          className="text-blue-600 font-medium cursor-pointer hover:underline"
        >
          Back to Login
        </span>
      </p>
    </div>
  );
}