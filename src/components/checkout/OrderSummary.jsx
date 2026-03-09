"use client";

export default function OrderSummary({
  items,
  subtotal,
  shipping,
  total,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 h-fit">

      <h2 className="text-lg font-semibold mb-4">
        Order Summary
      </h2>

      <div className="space-y-4">

        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">

              <img
                src={item.image}
                className="w-12 h-12 object-cover rounded"
              />

              <div>
                <p className="text-sm font-medium">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  Qty {item.qty}
                </p>
              </div>

            </div>

            <p className="font-medium">
              ₹{item.price * item.qty}
            </p>

          </div>
        ))}

      </div>

      <div className="border-t mt-5 pt-4 space-y-2 text-sm">

        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>₹{subtotal}</p>
        </div>

        <div className="flex justify-between">
          <p>Shipping</p>
          <p>₹{shipping}</p>
        </div>

        <div className="flex justify-between font-semibold text-base pt-2">
          <p>Total</p>
          <p>₹{total}</p>
        </div>

      </div>

    </div>
  );
}