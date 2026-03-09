"use client";

export default function AddToCartButton({ product }) {

  const handleAdd = () => {
    console.log("Add to cart", product);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
    >
      Add To Cart
    </button>
  );
}