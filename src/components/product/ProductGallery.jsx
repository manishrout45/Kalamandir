import { useState } from "react";

export default function ProductGallery({ images = [] }) {
  const [active, setActive] = useState(images[0] || "");

  return (
    <div>
      {/* Main Image */}
      <div className="w-full h-[500px] border rounded-lg overflow-hidden">
        <img
          src={active}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`w-20 h-20 border rounded overflow-hidden ${
              active === img ? "ring-2 ring-black" : ""
            }`}
          >
            <img
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}