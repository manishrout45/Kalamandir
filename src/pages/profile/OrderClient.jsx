import React from "react";

export default function OrderClient({ order }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Order Details
      </h1>

      <div className="border p-4 rounded-lg space-y-3">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Total:</strong> ₹{order.total}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
    </div>
  );
}