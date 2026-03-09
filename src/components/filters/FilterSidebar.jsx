"use client";

import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SizeFilter from "./SizeFilter";
import FabricFilter from "./FabricFilter";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";

export default function FilterSidebar({ filters, setFilters }) {

  const [options, setOptions] = useState({
    categories: [],
    sizes: [],
    fabrics: []
  });

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  const fetchFilterOptions = async () => {
    try {
      // Future backend API
      // const res = await fetch("/api/products/filter-options");
      // const data = await res.json();

      const data = {
        categories: ["Shirts", "Tshirts", "Hoodies", "Jeans"],
        sizes: ["S", "M", "L", "XL"],
        fabrics: ["Cotton", "Denim", "Linen"]
      };

      setOptions(data);

    } catch (err) {
      console.error(err);
    }
  };

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <aside className="w-full lg:w-64 bg-white rounded-xl border p-5 space-y-6">

      <h2 className="text-lg font-semibold border-b pb-2">
        Filters
      </h2>

      <CategoryFilter
        categories={options.categories}
        value={filters.category}
        onChange={(v) => updateFilter("category", v)}
      />

      <SizeFilter
        sizes={options.sizes}
        value={filters.size}
        onChange={(v) => updateFilter("size", v)}
      />

      <FabricFilter
        fabrics={options.fabrics}
        value={filters.fabric}
        onChange={(v) => updateFilter("fabric", v)}
      />

      <PriceFilter
        min={filters.minPrice}
        max={filters.maxPrice}
        onChange={(min,max)=>{
          updateFilter("minPrice",min)
          updateFilter("maxPrice",max)
        }}
      />

      <StockFilter
        value={filters.inStock}
        onChange={(v)=>updateFilter("inStock",v)}
      />

    </aside>
  );
}