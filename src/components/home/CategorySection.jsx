"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "Sarees",
    image: "/images/sarees.jpg",
    link: "/collections/sarees",
    size: "large",
  },
  {
    id: 2,
    title: "Lehenga",
    image: "/images/Lehenga.jpg",
    link: "/collections/lehenga",
    size: "medium",
  },
  {
    id: 3,
    title: "Salwar",
    image: "/images/Salwar.jpg",
    link: "/collections/salwar",
    size: "medium",
  },
  {
    id: 4,
    title: "Lehengas",
    image: "/images/Lehenga2.jpg",
    link: "/collections/lehengas",
    size: "large",
  },
];

export default function CategorySection() {
  return (
    <section className=" bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Marriage Special
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Large */}
          <CategoryCard data={categories[0]} />

          {/* Middle Column (Two Stacked) */}
          <div className="flex flex-col gap-6">
            <CategoryCard data={categories[1]} />
            <CategoryCard data={categories[2]} />
          </div>

          {/* Right Large */}
          <CategoryCard data={categories[3]} />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ data }) {
  return (
    <Link
      href={data.link}
      className="relative group overflow-hidden rounded-md"
    >
      <div
        className={`relative ${
          data.size === "large" ? "h-[520px]" : "h-[250px]"
        }`}
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Text Content */}
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold">
            {data.title}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-sm md:text-base">
            View Collection
            <span className="group-hover:translate-x-1 transition">
              →
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}