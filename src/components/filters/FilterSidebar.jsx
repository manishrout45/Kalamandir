"use client";

import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SizeFilter from "./SizeFilter";
import FabricFilter from "./FabricFilter";
import PriceFilter from "./PriceFilter";
import StockFilter from "./StockFilter";
import { filterConfig } from "./filterConfig";

export default function FilterSidebar({ filters, setFilters, pageType }) {

  const [options, setOptions] = useState({
    categories: [],
    sizes: [],
    fabrics: []
  });

  useEffect(() => {

    const categoryMap = {

      // Saree
      "silk-saree": "saree",
      "cotton-saree": "saree",
      "designer-saree": "saree",
      "party-wear-saree": "saree",
      "fancy-saree": "saree",
      "embroidered-saree": "saree",
      "baluchari": "saree",
      "banarasi": "saree",
      "bomkai": "saree",
      "patola": "saree",
      "ikkat-silk": "saree",
      "sambalpuri": "saree",
      "khandua": "saree",
      "chanderi": "saree",
      "kanjivaram": "saree",
      "lucknowi-chikankari": "saree",
      "pashmina-woven-silk": "saree",
      "handmade": "saree",
      "patta": "saree",

      // Lehenga
      "bridal-lehenga": "lehenga",
      "party-wear-lehenga": "lehenga",
      "designer-lehenga": "lehenga",

      // Western
      "tops": "western",
      "dresses": "western",
      "jeans": "western",
      "skirts": "western",

      // Salwar
      "churidar-suit": "salwar",
      "anarkali-suit": "salwar",
      "palazzo-suit": "salwar",

      // Accessories
      "blouse": "accessories",
      "petticoat": "accessories",
      "saree-fall": "accessories",
      "saree-lace": "accessories",
      "saree-pin": "accessories",
      "dupattas": "accessories",

      // Kids
      "baby-wear": "kids",
      "girls-wear": "kids",
      "boys-wear": "kids",
      "kids-ethnic-wear": "kids",
      "kids-winter-wear": "kids",
      "kids-nightwear": "kids",
      "kids-accessories": "kids",

      // Home Decor
      "blanket": "home",
      "mattress": "home",
      "bed-sheet": "home",
      "pillow": "home",
      "pillow-cover": "home",
      "bed-cover": "home",
      "ac-comforter": "home",
      "dohar": "home",
      "turkish-towel": "home",
      "cushion-cover": "home",
      "sofa-cover": "home",
      "bath-towel": "home"
    };

    const mainCategory = categoryMap[pageType] || pageType;

    const data = filterConfig[mainCategory] || {
      categories: [],
      sizes: [],
      fabrics: []
    };

    setOptions(data);

  }, [pageType]);

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

      {options.sizes.length > 0 && (
        <SizeFilter
          sizes={options.sizes}
          value={filters.size}
          onChange={(v) => updateFilter("size", v)}
        />
      )}

      {options.fabrics.length > 0 && (
        <FabricFilter
          fabrics={options.fabrics}
          value={filters.fabric}
          onChange={(v) => updateFilter("fabric", v)}
        />
      )}

      <PriceFilter
        min={filters.minPrice}
        max={filters.maxPrice}
        onChange={(min, max) => {
          updateFilter("minPrice", min);
          updateFilter("maxPrice", max);
        }}
      />

      <StockFilter
        value={filters.inStock}
        onChange={(v) => updateFilter("inStock", v)}
      />

    </aside>
  );
}