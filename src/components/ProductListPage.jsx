import React, { useEffect, useState } from "react";
import FilterSidebar from "./filters/FilterSidebar";
import ProductCard from "./product/ProductCard";
import { productsData } from "../data/products";
import { SlidersHorizontal, X } from "lucide-react";

export default function ProductListPage({ title, gender }) {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: [],
    fabric: [],
    size: [],
    price: 0,
    stock: false,
  });

  // ================= LOAD PRODUCTS =================
  useEffect(() => {
    const data = productsData.filter((p) => p.gender === gender);

    setProducts(data);
    setFiltered(data);

    const uniqueCategories = [...new Set(data.map((p) => p.category))];
    setCategories(uniqueCategories);

  }, [gender]);

  // ================= FILTER LOGIC =================
  useEffect(() => {

    let temp = [...products];

    if (filters.category.length > 0) {
      temp = temp.filter((p) => filters.category.includes(p.category));
    }

    if (filters.fabric.length > 0) {
      temp = temp.filter((p) => filters.fabric.includes(p.fabric));
    }

    if (filters.size.length > 0) {
      temp = temp.filter((p) =>
        p.size.some((s) => filters.size.includes(s))
      );
    }

    if (filters.price > 0) {
      temp = temp.filter((p) => p.price <= filters.price);
    }

    if (filters.stock) {
      temp = temp.filter((p) => p.stock === true);
    }

    setFiltered(temp);

  }, [filters, products]);

  // ================= CATEGORY CLICK =================
  const handleCategoryClick = (cat) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category.includes(cat)
        ? prev.category.filter((c) => c !== cat)
        : [...prev.category, cat],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      {/* TITLE + MOBILE FILTER BUTTON */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>

        <button
          onClick={() => setMobileFilterOpen(true)}
          className="md:hidden flex items-center gap-2 border px-4 py-2 rounded-lg"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      {/* ================= CATEGORY BAR ================= */}
      <div className="bg-white py-3 mb-4 border-b">
        <div className="flex gap-3 overflow-x-auto no-scrollbar px-1">

          {categories.map((cat, index) => (
            <button
              key={`${cat}-${index}`}   // ✅ FIXED duplicate key issue
              onClick={() => handleCategoryClick(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm transition
                ${
                  filters.category.includes(cat)
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                }
              `}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* FILTER SIDEBAR */}
        <div className="hidden md:block">
          <div className="sticky top-20 h-[calc(100vh-100px)] overflow-y-auto pr-2 no-scrollbar">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="md:col-span-3 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">

          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found
            </p>
          )}

        </div>

      </div>

      {/* ================= MOBILE FILTER DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 transition ${
          mobileFilterOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setMobileFilterOpen(false)}
          className={`absolute inset-0 bg-black/40 transition ${
            mobileFilterOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-5 overflow-y-auto transition-transform ${
            mobileFilterOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X />
            </button>
          </div>

          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>

    </div>
  );
}