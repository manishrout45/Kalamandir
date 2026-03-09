"use client";

import { useParams } from "next/navigation";
import OrderTracker from "@/components/profile/OrderTracker";

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">
        Order Details #{orderId}
      </h1>

      <OrderTracker orderId={orderId} />
    </div>
  );
}