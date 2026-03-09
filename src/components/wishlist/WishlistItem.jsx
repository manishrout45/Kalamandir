"use client";

export default function WishlistItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          ₹ {item.price}
        </p>

        {item.category && (
          <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {item.category}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onRemove(item._id)}
          className="text-red-500 text-sm hover:underline"
        >
          Remove
        </button>

        <button
          className="bg-blue-600 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}