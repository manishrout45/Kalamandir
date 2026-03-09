"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      // const res = await fetch("/api/orders");
      // const data = await res.json();

      const data = [
        {
          id: "ORD123",
          date: "2026-03-02",
          total: 1200,
          status: "Shipped",
        },
      ];

      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="border p-4 rounded-lg flex justify-between"
        >
          <div>
            <p className="font-semibold">Order #{order.id}</p>
            <p>{order.date}</p>
            <p>Status: {order.status}</p>
          </div>

          <Link
            href={`/profile/orders/${order.id}`}
            className="text-blue-600"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}