"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Loader2 } from "lucide-react";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }

    // 🔹 Future Backend Integration
    const fetchOrder = async () => {
      try {
        const res = await fetch(`/api/orders/${orderId}`);
        const data = await res.json();
        setOrder(data);
      } catch (error) {
        console.error("Order fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-gray-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Order Placed Successfully
        </h1>

        <p className="text-gray-500 mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        {/* Order ID */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="text-lg font-semibold">{orderId || "N/A"}</p>
        </div>

        {/* Order Summary (Backend will fill later) */}
        {order && (
          <div className="border rounded-lg p-6 text-left mb-6">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            {order.items?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between py-2 border-b text-sm"
              >
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}

            <div className="flex justify-between mt-4 font-semibold">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/shop"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>

          <Link
            href="/orders"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}