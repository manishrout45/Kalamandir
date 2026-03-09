import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {

  if(!products.length){
    return (
      <p className="text-gray-500">
        No products found
      </p>
    );
  }

  return (

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">

      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}

    </div>

  );
}