export default function PriceSection({ price, originalPrice }) {

  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div className="flex items-center gap-3 mt-3">

      <span className="text-2xl font-bold">
        ₹{price}
      </span>

      <span className="text-gray-400 line-through">
        ₹{originalPrice}
      </span>

      <span className="text-green-600 font-medium text-sm">
        {discount}% Off
      </span>

    </div>
  );
}