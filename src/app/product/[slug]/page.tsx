"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug, categories } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/" className="text-accent hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const hasSale = product.originalPrice && product.originalPrice > product.price;
  const productCategories = categories.filter((c) =>
    product.categories.includes(c.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6"
      >
        <ArrowLeft size={16} /> Back to All Peptides
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="product-image-wrapper rounded-xl relative min-h-[400px]">
          {hasSale && <span className="sale-badge text-base px-3 py-1">Sale!</span>}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-[400px]"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">{product.name}</h1>

          <div className="flex items-center gap-3 mb-6">
            {hasSale ? (
              <>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice!.toFixed(2)}
                </span>
                <span className="text-3xl font-bold text-sale">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Categories */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Categories: </span>
            {productCategories.map((cat, i) => (
              <span key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  {cat.name}
                </Link>
                {i < productCategories.length - 1 && ", "}
              </span>
            ))}
          </div>

          {/* Display only notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800 font-medium">
              This is a display-only catalog. Purchasing is not available on this site.
            </p>
          </div>

          {/* Description */}
          <div className="border-t pt-6">
            <h2 className="font-semibold text-lg mb-3">Product Information</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.name} is a research-grade peptide available for scientific
              and laboratory use only. All products undergo strict third-party
              testing to ensure purity, accuracy, and consistency.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500">
              <strong>Disclaimer:</strong> This product is sold for research,
              laboratory, or analytical purposes only. Not for human use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
