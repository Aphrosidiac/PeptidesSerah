import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const hasSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="product-card group">
      <Link href={`/product/${product.slug}`}>
        <div className="product-image-wrapper">
          {hasSale && <span className="sale-badge">Sale!</span>}
          <svg
            className="w-16 h-24"
            viewBox="0 0 60 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Vial cap */}
            <rect x="18" y="0" width="24" height="12" rx="2" fill="#8B9DAF" />
            <rect x="20" y="12" width="20" height="6" rx="1" fill="#A0B0C0" />
            {/* Vial body */}
            <rect x="15" y="18" width="30" height="65" rx="4" fill="#E8F4F0" stroke="#B0D0C8" strokeWidth="1.5" />
            {/* Liquid */}
            <rect x="16" y="45" width="28" height="36" rx="3" fill="#4ECDC4" opacity="0.3" />
            {/* Label */}
            <rect x="19" y="30" width="22" height="18" rx="2" fill="white" stroke="#D0E0D8" strokeWidth="0.5" />
            <line x1="22" y1="35" x2="38" y2="35" stroke="#B0C8C0" strokeWidth="1" />
            <line x1="22" y1="39" x2="35" y2="39" stroke="#B0C8C0" strokeWidth="1" />
            <line x1="22" y1="43" x2="32" y2="43" stroke="#B0C8C0" strokeWidth="1" />
            {/* Bottom */}
            <rect x="15" y="80" width="30" height="3" rx="1.5" fill="#B0D0C8" />
          </svg>
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
