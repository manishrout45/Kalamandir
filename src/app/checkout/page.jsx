"use client";

import { useState, useEffect } from "react";
import AddressForm from "@/components/checkout/AddressForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentSection from "@/components/checkout/PaymentSection";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      // Future backend
      // const res = await fetch("/api/cart");
      // const data = await res.json();

      const data = [
        {
          id: 1,
          name: "Hair Dryer",
          price: 1200,
          qty: 1,
          image:
            "https://images.unsplash.com/photo-1620331311520-246422fd82f9",
        },
        {
          id: 2,
          name: "Hair Trimmer",
          price: 800,
          qty: 1,
          image:
            "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
        },
      ];

      setCartItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-semibold mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-8">

            <AddressForm
              address={address}
              setAddress={setAddress}
            />

            <PaymentSection
              total={total}
              address={address}
            />

          </div>

          {/* RIGHT SECTION */}
          <OrderSummary
            items={cartItems}
            subtotal={subtotal}
            shipping={shipping}
            total={total}
          />

        </div>

      </div>
    </div>
  );
}