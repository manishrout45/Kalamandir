export default function SaleBadge({ discount }) {
  return (
    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
      {discount}
    </span>
  );
}