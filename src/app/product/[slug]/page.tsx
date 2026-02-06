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
          <svg
            className="w-32 h-48"
            viewBox="0 0 60 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="18" y="0" width="24" height="12" rx="2" fill="#8B9DAF" />
            <rect x="20" y="12" width="20" height="6" rx="1" fill="#A0B0C0" />
            <rect x="15" y="18" width="30" height="65" rx="4" fill="#E8F4F0" stroke="#B0D0C8" strokeWidth="1.5" />
            <rect x="16" y="45" width="28" height="36" rx="3" fill="#4ECDC4" opacity="0.3" />
            <rect x="19" y="30" width="22" height="18" rx="2" fill="white" stroke="#D0E0D8" strokeWidth="0.5" />
            <line x1="22" y1="35" x2="38" y2="35" stroke="#B0C8C0" strokeWidth="1" />
            <line x1="22" y1="39" x2="35" y2="39" stroke="#B0C8C0" strokeWidth="1" />
            <line x1="22" y1="43" x2="32" y2="43" stroke="#B0C8C0" strokeWidth="1" />
            <rect x="15" y="80" width="30" height="3" rx="1.5" fill="#B0D0C8" />
          </svg>
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
