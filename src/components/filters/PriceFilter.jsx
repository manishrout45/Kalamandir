"use client";

import { useState, useEffect } from "react";

export default function PriceFilter({ min, max, onChange }) {

  const [minPrice,setMinPrice] = useState(min || "");
  const [maxPrice,setMaxPrice] = useState(max || "");

  useEffect(()=>{

    const timer = setTimeout(()=>{
      onChange(minPrice,maxPrice)
    },400)

    return ()=>clearTimeout(timer)

  },[minPrice,maxPrice])

  return (
    <div>

      <h3 className="font-medium mb-3">
        Price Range
      </h3>

      <div className="flex gap-2">

        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e)=>setMinPrice(e.target.value)}
          className="w-full border rounded-md px-2 py-1 text-sm"
        />

        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e)=>setMaxPrice(e.target.value)}
          className="w-full border rounded-md px-2 py-1 text-sm"
        />

      </div>

    </div>
  );
}