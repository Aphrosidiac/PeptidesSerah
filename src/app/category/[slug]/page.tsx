"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = getProductsByCategory(slug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <Link href="/" className="text-accent hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">{category.name}</h1>
        <p className="text-gray-500 mt-1">
          Showing {categoryProducts.length} products
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
