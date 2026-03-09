"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import FilterSidebar from "@/components/filters/FilterSidebar";

export default function ShopPage() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: "",
    size: "",
    fabric: "",
    minPrice: "",
    maxPrice: "",
    inStock: false
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = async () => {

    // FUTURE BACKEND
    // const res = await fetch("/api/products");
    // const data = await res.json();

    const data = [
      {
        _id:"1",
        name:"FOUNDERS.SAMBALPURI",
        price:2000,
        originalPrice:8000,
        category:"Shirts",
        fabric:"Cotton",
        size:["M","L"],
        stock:true,
        images:["/Images/p-1.webp"]
      },
      {
        _id:"2",
        name:"FOUNDERS.SAMBALPURI",
        price:3500,
        originalPrice:8000,
        category:"Jeans",
        fabric:"Denim",
        size:["S","M"],
        stock:true,
        images:["/Images/p-1.webp"]
      }
    ];

    setProducts(data);
    setFilteredProducts(data);
  };

  const applyFilters = () => {

    let filtered = [...products];

    if(filters.category){
      filtered = filtered.filter(
        p => p.category === filters.category
      );
    }

    if(filters.fabric){
      filtered = filtered.filter(
        p => p.fabric === filters.fabric
      );
    }

    if(filters.size){
      filtered = filtered.filter(
        p => p.size.includes(filters.size)
      );
    }

    if(filters.minPrice){
      filtered = filtered.filter(
        p => p.price >= filters.minPrice
      );
    }

    if(filters.maxPrice){
      filtered = filtered.filter(
        p => p.price <= filters.maxPrice
      );
    }

    if(filters.inStock){
      filtered = filtered.filter(
        p => p.stock === true
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

        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
        />

        <ProductGrid products={filteredProducts} />

      </div>

    </div>
  );
}