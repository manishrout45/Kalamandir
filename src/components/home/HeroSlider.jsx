"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Make Every",
    subtitle: "Twirl Magical",
    desc: "From royal embroidery silhouettes – our exclusive lehengas are designed to make heads turn at every festive moment.",
    btn: "SHOP DESIGNER LEHENGAS",
    img: "/Images/2.png",
  },
  {
    id: 2,
    title: "Celebrate",
    subtitle: "The Season in Style",
    desc: "Unveil the season's freshest sarees and lehengas – crafted for the modern woman who loves tradition with a twist.",
    btn: "SHOP THE DIWALI SALE",
    img: "/Images/3.png",
  },
  {
    id: 3,
    title: "Elegance",
    subtitle: "For Every Occasion",
    desc: "Discover premium festive collections curated for weddings, celebrations and grand moments.",
    btn: "EXPLORE COLLECTION",
    img: "/Images/4.png",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[90vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
                <div className="max-w-xl text-white">

                  <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
                    {slide.title}
                  </h1>

                  <h2 className="text-2xl md:text-4xl mt-2 font-serif">
                    {slide.subtitle}
                  </h2>

                  <p className="mt-4 text-sm md:text-lg text-white/90">
                    {slide.desc}
                  </p>

                  <button className="mt-6 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                    {slide.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white text-3xl"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white text-3xl"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}