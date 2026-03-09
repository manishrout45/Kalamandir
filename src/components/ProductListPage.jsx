"use client";

import { useEffect, useState } from "react";
import FilterSidebar from "@/components/filters/FilterSidebar";

export default function ProductListPage({ title, apiQuery }) {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    category: [],
    fabric: [],
    size: [],
    price: 0,
    stock: false,
  });

  // Fetch products based on page (men/women/kids/etc)
  useEffect(() => {
    async function fetchProducts() {

      const res = await fetch(`http://localhost:5000/api/products?${apiQuery}`);
      const data = await res.json();

      setProducts(data);
      setFiltered(data);
    }

    fetchProducts();
  }, [apiQuery]);

  // Apply filters
  useEffect(() => {

    let temp = [...products];

    if (filters.category.length > 0) {
      temp = temp.filter((p) => filters.category.includes(p.category));
    }

    if (filters.fabric.length > 0) {
      temp = temp.filter((p) => filters.fabric.includes(p.fabric));
    }

    if (filters.size.length > 0) {
      temp = temp.filter((p) => filters.size.includes(p.size));
    }

    if (filters.price > 0) {
      temp = temp.filter((p) => p.price <= filters.price);
    }

    if (filters.stock) {
      temp = temp.filter((p) => p.stock > 0);
    }

    setFiltered(temp);

  }, [filters, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-3xl font-bold mb-10">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* FILTER SIDEBAR */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* PRODUCTS GRID */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filtered.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded"
              />

              <h3 className="mt-3 font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-500">
                ₹{product.price}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}