"use client";

export default function BuyNowButton({ product }) {

  const handleBuy = () => {
    console.log("Buy now", product);
  };

  return (
    <button
      onClick={handleBuy}
      className="w-full border border-black py-3 rounded-md hover:bg-black hover:text-white transition"
    >
      Buy Now
    </button>
  );
}