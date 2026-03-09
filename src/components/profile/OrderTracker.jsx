"use client";

import { useEffect, useState } from "react";

export default function OrderTracker({ orderId }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      // Future backend API
      // const res = await fetch(`/api/orders/${orderId}`);
      // const data = await res.json();

      const data = {
        id: orderId,
        status: "Shipped",
        items: [
          {
            name: "Hair Dryer",
            qty: 1,
            price: 1200,
          },
          {
            name: "Hair Trimmer",
            qty: 1,
            price: 800,
          },
        ],
      };

      setOrder(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!order) return <p>Loading order...</p>;

  return (
    <div className="space-y-6">

      <div className="border p-4 rounded-lg">
        <p className="font-semibold text-lg">
          Order #{order.id}
        </p>
        <p>Status: {order.status}</p>
      </div>

      <div className="space-y-3">
        {order.items.map((item, index) => (
          <div
            key={index}
            className="border p-3 rounded flex justify-between"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p>Qty: {item.qty}</p>
            </div>

            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}