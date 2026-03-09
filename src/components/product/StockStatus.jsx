export default function StockStatus({ stock }) {

  if (stock > 0) {
    return (
      <p className="text-green-600 text-sm font-medium">
        In Stock
      </p>
    );
  }

  return (
    <p className="text-red-500 text-sm font-medium">
      Out of Stock
    </p>
  );
}