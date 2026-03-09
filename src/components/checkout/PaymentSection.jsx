"use client";

import RazorpayButton from "./RazorpayButton";

export default function PaymentSection({ total, address }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-lg font-semibold mb-4">
        Payment
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Secure payments powered by Razorpay
      </p>

      <RazorpayButton
        amount={total}
        address={address}
      />

    </div>
  );
}