


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
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
            {products.length === 0 ? (
                <p className="text-center">Loading products...</p>
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
    );
}
