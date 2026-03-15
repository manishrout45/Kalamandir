"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";

export default function RecentProducts() {

  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {

      // Example API
      // const res = await fetch("http://localhost:5000/api/products");
      // const data = await res.json();

      const data = [
        {_id:"1",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/Images/SambalpuriSaree.jpg"]},
        {_id:"2",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p2.jpg"]},
        {_id:"3",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p3.jpg"]},
        {_id:"4",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p4.jpg"]},
        {_id:"5",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p1.jpg"]},
        {_id:"6",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p2.jpg"]},
        {_id:"7",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p3.jpg"]},
        {_id:"8",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p4.jpg"]},
        {_id:"9",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p1.jpg"]},
        {_id:"10",name:"FOUNDERS.SAMBALPURI",price:2000,originalPrice:8000,images:["/products/p2.jpg"]},
      ];

      setProducts(data);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const loadMore = () => {
    setVisible((prev) => prev + 5);
  };

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-gray-500">Loading products...</p>
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
          <ProductCard key={product._id} product={product} />
        ))}

      </div>

      {/* SEE MORE BUTTON */}
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