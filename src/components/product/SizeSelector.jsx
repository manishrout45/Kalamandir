"use client";

import { useState } from "react";

export default function SizeSelector({ sizes }) {

  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-6">

      <p className="font-medium mb-2">
        Select Size
      </p>

      <div className="flex gap-3">

        {sizes.map((size) => (

          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`px-4 py-2 border rounded 
            ${selected === size ? "bg-black text-white" : ""}`}
          >
            {size}
          </button>

        ))}

      </div>

    </div>
  );
}