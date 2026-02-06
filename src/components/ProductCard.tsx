import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const hasSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="product-card group">
      <Link href={`/product/${product.slug}`}>
        <div className="product-image-wrapper">
          {hasSale && <span className="sale-badge">Sale!</span>}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-3">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-gray-800 mb-2 group-hover:text-primary transition line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          {hasSale ? (
            <>
              <span className="price-original">${product.originalPrice!.toFixed(2)}</span>
              <span className="price-sale">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="price-regular">${product.price.toFixed(2)}</span>
          )}
        </div>
        <div className="mt-2 text-xs text-gray-400 italic">Display only</div>
      </div>
    </div>
  );
}
