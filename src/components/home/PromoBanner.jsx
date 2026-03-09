"use client";

import Image from "next/image";

export default function PromoBanner() {

  const sareeCollections = [
    {
      name: "Sambalpuri Saree",
      role: "Traditional Weave",
      img: "/Images/SambalpuriSaree.jpg",
    },
    {
      name: "Banarasi Silk",
      role: "Luxury Collection",
      img: "/Images/BanarasiSaree.jpg",
    },
    {
      name: "Cotton Saree",
      role: "Daily Comfort",
      img: "/Images/CottonSaree.jpg",
    },
    {
      name: "Bridal Saree",
      role: "Wedding Special",
      img: "/Images/BridalSaree.jpg",
    },
  ];

  return (
    <section className="relative w-full py-10 h-[900px] md:h-[720px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/Images/1.png"
        alt="Kalamandir Fashion"
        fill
        priority
        className="object-cover"
      />

      <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">

        <div className="grid md:grid-cols-2 gap-12 w-full items-center">

          {/* LEFT CONTENT */}
          <div className="text-white py-10 space-y-8 max-w-xl"></div>

          {/* RIGHT COLLECTION GRID */}
          <div className="grid grid-cols-2 gap-6">

            {sareeCollections.map((item, index) => (

              <div
                key={index}
                className="group relative h-[200px] rounded-xl overflow-hidden cursor-pointer shadow-lg"
              >

                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-4 left-4 text-white">

                  <h4 className="text-lg font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-200">
                    {item.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}