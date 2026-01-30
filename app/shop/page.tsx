"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-center text-gray-600">
            Discover our amazing collection
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-center text-gray-600 text-lg">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

