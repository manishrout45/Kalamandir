"use client";

export default function QuantityUpdater({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      <button
        onClick={onDecrease}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
      >
        -
      </button>

      <span className="px-4 py-1 text-sm font-medium">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}