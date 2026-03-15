"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function ProductDetails() {

  const { id } = useParams();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");

  // temporary data
  const products = [
    {
      _id: "1",
      name: "SAMBALPURI",
      price: 2000,
      originalPrice: 8000,
      images: [
        "/Images/SambalpuriSaree.jpg",
        "/Images/SambalpuriSaree.jpg",
        "/Images/SambalpuriSaree.jpg"
      ],
      description:
        "Premium Sambalpuri saree crafted with traditional handloom techniques. Elegant and comfortable for festive occasions.",
    },
    {
      _id: "2",
      name: "FOUNDERS.SAMBALPURI",
      price: 2000,
      originalPrice: 8000,
      images: ["/products/p2.jpg"],
      description:
        "Premium Sambalpuri design founders collection.",
    },
  ];

  const product = products.find((p) => p._id === id);

  if (!product) return <p className="p-10">Product not found</p>;

  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-8 px-4 py-2 border rounded-md hover:bg-black hover:text-white transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="grid lg:grid-cols-2 gap-14">

        {/* PRODUCT IMAGES */}
        <div>

          {/* Main Image */}
          <div className="relative w-full h-[500px] border rounded-lg overflow-hidden">

            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />

            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {discount}% OFF
            </span>

          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">

            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 border cursor-pointer ${
                  selectedImage === index
                    ? "border-black"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={img}
                  alt="thumb"
                  fill
                  className="object-cover"
                />
              </div>
            ))}

          </div>

        </div>

        {/* PRODUCT INFO */}
        <div>

          <h1 className="text-3xl font-semibold">
            {product.name}
          </h1>

          {/* PRICE */}
          <div className="flex items-center gap-4 mt-4">

            <span className="text-gray-400 line-through text-lg">
              ₹{product.originalPrice}
            </span>

            <span className="text-3xl font-bold">
              ₹{product.price}
            </span>

            <span className="text-green-600 font-medium">
              {discount}% Off
            </span>

          </div>

          <p className="text-green-600 text-sm mt-2">
            Inclusive of all taxes
          </p>

          {/* SIZE */}
          <div className="mt-8">

            <h3 className="font-medium mb-3">
              Select Size
            </h3>

            <div className="flex gap-3">

              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border px-4 py-2 ${
                    size === s
                      ? "bg-black text-white"
                      : "hover:border-black"
                  }`}
                >
                  {s}
                </button>
              ))}

            </div>

          </div>

          {/* QUANTITY */}
          <div className="mt-8">

            <h3 className="font-medium mb-3">
              Quantity
            </h3>

            <div className="flex items-center border w-max">

              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-4 py-2"
              >
                -
              </button>

              <span className="px-6">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2"
              >
                +
              </button>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-10">

            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800">
              Add to Cart
            </button>

            <button className="border border-black px-8 py-3 hover:bg-black hover:text-white">
              Buy Now
            </button>

          </div>

          {/* DESCRIPTION */}
          <div className="mt-10 border-t pt-6">

            <h3 className="font-semibold text-lg mb-3">
              Product Description
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}