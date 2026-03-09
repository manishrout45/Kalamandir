import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import SaleBadge from "./SaleBadge";

export default function ProductCard({ product }) {

  const discount =
    product.originalPrice && product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : null;

  return (
    <Link
      href={`/shop/product/${product._id}`}
      className="group block bg-white rounded-lg border overflow-hidden hover:shadow-lg transition"
    >
      {/* Image Section */}
      <div className="relative h-[260px] overflow-hidden">

        {/* Discount Badge */}
        {discount && <SaleBadge discount={`${discount}% OFF`} />}

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>

        {/* Product Image */}
        <Image
          src={product.images?.[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition">
          <button className="w-full bg-black text-white py-2 text-sm flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>

      </div>

      {/* Product Info */}
      <div className="p-4">

        {/* Product Name */}
        <p className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.name}
        </p>

        {/* Rating (Optional placeholder) */}
        <div className="flex items-center gap-1 mt-1 text-yellow-500 text-xs">
          ★★★★☆ <span className="text-gray-500">(120)</span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-2">

          <span className="text-gray-400 line-through text-sm">
            ₹{product.originalPrice}
          </span>

          <span className="font-semibold text-lg text-black">
            ₹{product.price}
          </span>

          {discount && (
            <span className="text-green-600 text-xs font-medium">
              {discount}% off
            </span>
          )}

        </div>

        {/* Delivery */}
        <p className="text-xs text-gray-500 mt-1">
          🚚 Free Delivery
        </p>

      </div>
    </Link>
  );
}