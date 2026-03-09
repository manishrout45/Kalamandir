"use client";

import OrderHistory from "@/components/profile/OrderHistory";

export default function OrdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      <OrderHistory />
    </div>
  );
}