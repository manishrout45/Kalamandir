import { useParams } from "react-router-dom";
import { productsData } from "../data/products";
import ProductClient from "./ProductClient";

export default function Product() {
  const { id } = useParams();

  const product = productsData.find(
    (p) => p._id.toString() === id
  );

  if (!product) {
    return (
      <p className="text-center py-10">
        Product not found
      </p>
    );
  }

  return <ProductClient product={product} />;
}