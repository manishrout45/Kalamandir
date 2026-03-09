"use client";

import { useEffect, useState } from "react";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch Cart (Backend Ready)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/cart"); // backend dev will implement
        const data = await res.json();

        setCart(data || []);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // 🔥 Remove Item
  const handleRemove = async (id) => {
    try {
      await fetch(`/cart/${id}`, {
        method: "DELETE",
      });

      setCart((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Remove failed:", error);
    }
  };

  // 🔥 Increase Quantity
  const handleIncrease = async (id) => {
    try {
      await fetch(`/cart/${id}/increase`, {
        method: "PATCH",
      });

      setCart((prev) =>
        prev.map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } catch (error) {
      console.error("Increase failed:", error);
    }
  };

  // 🔥 Decrease Quantity
  const handleDecrease = async (id) => {
    try {
      await fetch(`/cart/${id}/decrease`, {
        method: "PATCH",
      });

      setCart((prev) =>
        prev.map((item) =>
          item._id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error("Decrease failed:", error);
    }
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          My Cart
        </h1>

        {loading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-gray-600 text-lg">
              Your cart is empty 🛒
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="md:col-span-2 space-y-5">
              {cart.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  onRemove={handleRemove}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              ))}
            </div>

            {/* Summary */}
            <div>
              <CartSummary subtotal={subtotal} />
            </div>

          </div>
        )}
      </div>
    </div>
  );
}