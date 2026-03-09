"use client";

import Image from "next/image";

const products = [
  {
    title: "Wedding Couture",
    image: "/images/WeddingCouture.jpg",
  },
  {
    title: "Festive Wear",
    image: "/images/FestiveWear.jpg",
  },
  {
    title: "Western Fusion",
    image: "/images/WesternFusion.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-100 py-10  px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-[1px] bg-gray-300 hidden md:block"></div>

          <h2 className="px-6 text-3xl md:text-4xl font-semibold font-serif text-center text-gray-800">
            New Arrivals
          </h2>

          <div className="flex-1 h-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md shadow-lg"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={800}
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">
                  {item.title}
                </h3>

                <button className="bg-white text-black px-5 py-2 text-sm font-medium hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}