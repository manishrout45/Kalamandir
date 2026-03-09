"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }) {

  const [active, setActive] = useState(images[0]);

  return (
    <div>

      <div className="relative w-full h-[500px] border rounded-lg">

        <Image
          src={active}
          alt="product"
          fill
          className="object-cover"
        />

      </div>

      <div className="flex gap-3 mt-4">

        {images.map((img, i) => (

          <button
            key={i}
            onClick={() => setActive(img)}
            className="relative w-20 h-20 border rounded"
          >

            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}