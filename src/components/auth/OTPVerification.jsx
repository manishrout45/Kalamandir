"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OTPVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.length !== 6) {
      return setError("Please enter a valid 6-digit OTP");
    }

    try {
      setLoading(true);

      // 🔥 Replace with real API call
      console.log("Verifying OTP:", otp, "for email:", email);

      setTimeout(() => {
        router.push(`/reset-password?email=${email}`);
      }, 1000);

    } catch (err) {
      setError("Invalid OTP. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-center mb-2">
        OTP Verification
      </h2>

      <p className="text-sm text-gray-500 text-center mb-6">
        Enter the 6-digit OTP sent to {email}
      </p>

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}

      <form onSubmit={handleVerify} className="space-y-5">
        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full text-center tracking-widest text-lg px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        Didn’t receive OTP?{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">
          Resend
        </span>
      </p>
    </div>
  );
}