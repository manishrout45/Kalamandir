import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../../data/products";
import EditProductClient from "./EditProductClient";

export default function EditProduct() {
  const { id } = useParams();

  const product = productsData.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="container-base py-10">
        <p>Product not found</p>
      </div>
    );
  }

  return <EditProductClient product={product} />;
}