import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductGrid from "../../components/product/ProductGrid";
import FilterSidebar from "../../components/filters/FilterSidebar";
import { productsData } from "../../data/products.js";
export default function Category() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    size: "",
    fabric: "",
    minPrice: "",
    maxPrice: "",
    inStock: false,
  });

  useEffect(() => {
    if (category) fetchProducts();
  }, [category]);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = () => {
    const categoryName = category
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const categoryProducts = productsData.filter(
      (p) => p.category === categoryName
    );

    setProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.fabric) {
      filtered = filtered.filter((p) => p.fabric === filters.fabric);
    }

    if (filters.size) {
      filtered = filtered.filter((p) => p.size.includes(filters.size));
    }

    if (filters.minPrice) {
      filtered = filtered.filter(
        (p) => p.price >= Number(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (p) => p.price <= Number(filters.maxPrice)
      );
    }

    if (filters.inStock) {
      filtered = filtered.filter((p) => p.stock === true);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      <h1 className="text-3xl font-semibold mb-10 capitalize">
        {category?.replace(/-/g, " ")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
        />

        <ProductGrid products={filteredProducts} />

      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-10">
          No products found
        </p>
      )}

    </div>
  );
}