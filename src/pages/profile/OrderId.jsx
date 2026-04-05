import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderId() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const fetchOrder = async () => {
    try {
      // 🔥 Replace with backend API later
      // const res = await fetch(`/api/orders/${id}`);
      // const data = await res.json();

      const data = {
        id: id,
        date: "2026-03-02",
        status: "Shipped",
        items: [
          {
            id: 1,
            name: "Saree",
            price: 1200,
            qty: 1,
          },
          {
            id: 2,
            name: "Lehenga",
            price: 2500,
            qty: 1,
          },
        ],
      };

      setOrder(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading order...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Order not found</p>
      </div>
    );
  }

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-semibold mb-6">
        Order Details
      </h1>

      {/* Order Info */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>

      {/* Items */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">
          Items
        </h2>

        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-3 text-sm"
          >
            <span>{item.name}</span>
            <span>₹{item.price} × {item.qty}</span>
          </div>
        ))}

        <div className="flex justify-between mt-4 font-semibold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

    </div>
  );
}