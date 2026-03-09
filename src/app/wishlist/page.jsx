"use client";

import { useEffect, useState } from "react";
import WishlistItem from "@/components/wishlist/WishlistItem";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Backend Integration Ready
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch("/api/wishlist"); // backend dev will create this
        const data = await res.json();

        setWishlist(data || []);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // 🔥 Remove Handler (Backend Ready)
  const handleRemove = async (id) => {
    try {
      await fetch(`/api/wishlist/${id}`, {
        method: "DELETE",
      });

      // Optimistic update
      setWishlist((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Wishlist
        </h1>

        {loading ? (
          <p className="text-gray-500">Loading wishlist...</p>
        ) : wishlist.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p className="text-gray-600 text-lg">
              Your wishlist is empty 💔
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {wishlist.map((item) => (
              <WishlistItem
                key={item._id}
                item={item}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}