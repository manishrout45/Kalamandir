import React, { useState, useEffect } from "react";

export default function EditProductClient({ product }) {
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    console.log("Received product:", product); // 👈 log incoming prop

    if (product) {
      setFormData(product);
      console.log("Form data set to:", product); // 👈 log state update
    }
  }, [product]);

  useEffect(() => {
    console.log("Current formData:", formData); // 👈 log every change
  }, [formData]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Edit Product
      </h1>

      <input
        type="text"
        value={formData.name || ""}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="border p-2 w-full mb-4"
      />
    </div>
  );
}