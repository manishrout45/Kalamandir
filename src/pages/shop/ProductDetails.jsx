import React, { useState } from "react";

export default function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || ""
  );

  if (!product) {
    return (
      <div className="text-center py-10 text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT: IMAGES */}
      <div>
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-[420px] object-cover rounded-lg shadow"
        />

        <div className="flex gap-3 mt-4">
          {product.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                selectedImage === img
                  ? "border-black"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: DETAILS */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-600 mt-3 leading-relaxed">
          {product.description}
        </p>

        <p className="text-2xl font-semibold mt-4">
          ₹{product.price}
        </p>

        {product.stock ? (
          <p className="text-green-600 mt-2">In Stock</p>
        ) : (
          <p className="text-red-500 mt-2">Out of Stock</p>
        )}

        <button
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}