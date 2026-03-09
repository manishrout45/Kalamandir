"use client";

export default function CartSummary({ subtotal }) {
  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold">Order Summary</h2>

      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>₹ {subtotal}</span>
      </div>

      <div className="flex justify-between text-gray-600">
        <span>Shipping</span>
        <span>₹ {shipping}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹ {total}</span>
      </div>

      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}