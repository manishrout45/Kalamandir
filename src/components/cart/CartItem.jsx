"use client";

import QuantityUpdater from "./QuantityUpdater";

export default function CartItem({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="flex gap-4 bg-white shadow-md rounded-xl p-4">

      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-800">
          {item.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          ₹ {item.price}
        </p>

        {/* Quantity */}
        <div className="mt-3">
          <QuantityUpdater
            quantity={item.quantity}
            onIncrease={() => onIncrease(item._id)}
            onDecrease={() => onDecrease(item._id)}
          />
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => onRemove(item._id)}
        className="text-red-500 text-sm hover:underline"
      >
        Remove
      </button>
    </div>
  );
}