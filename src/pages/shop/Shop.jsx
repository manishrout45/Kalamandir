import { useEffect, useState } from "react";

import ProductGrid from "../../components/product/ProductGrid";
import FilterSidebar from "../../components/filters/FilterSidebar";
import { productsData } from "../../data/products";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: "",
    size: "",
    fabric: "",
    minPrice: "",
    maxPrice: "",
    inStock: false,
  });

  // Load all products
  useEffect(() => {
    fetchProducts();
  }, []);

  // Apply filters
  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = () => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(
        (p) => p.category === filters.category
      );
    }

    if (filters.fabric) {
      filtered = filtered.filter(
        (p) => p.fabric === filters.fabric
      );
    }

    if (filters.size) {
      filtered = filtered.filter(
        (p) => p.size.includes(filters.size)
      );
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
      filtered = filtered.filter(
        (p) => p.stock === true
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      <h1 className="text-3xl font-semibold mb-10">
        Shop
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

        {/* FILTER SIDEBAR */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
        />

        {/* PRODUCT GRID */}
        <div>
          <ProductGrid products={filteredProducts} />

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-6">
              No products found
            </p>
          )}
        </div>

      </div>

    </div>
  );
}