import React from "react";

export default function ProductClient({ product }) {
  return (
    <div className="max-w-4xl mx-auto py-10">
      
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-96 object-cover"
      />

      <h1 className="text-2xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <p className="text-xl font-semibold mt-3">
        ₹{product.price}
      </p>

    </div>
  );
}