import React, { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import { productsData } from "../data/products";

export default function RecentProducts() {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  // 🔀 Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const loadProducts = () => {
    try {
      const mixedProducts = shuffleArray(productsData);
      setProducts(mixedProducts);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setVisible((prev) => prev + 5);
  };

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-gray-500">
          Loading products...
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
          Recent Products
        </h2>
        <div className="w-16 h-[2px] bg-black mx-auto mt-3"></div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.slice(0, visible).map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visible < products.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="px-8 py-3 border border-black hover:bg-black hover:text-white transition font-medium"
          >
            See More Products
          </button>
        </div>
      )}

    </section>
  );
}