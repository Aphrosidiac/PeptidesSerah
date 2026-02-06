"use client";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { getAllProducts, categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function AllPeptidesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState("az");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const allProducts = getAllProducts();

  const displayProducts = useMemo(() => {
    let filtered = activeCategory
      ? getProductsByCategory(activeCategory)
      : [...allProducts];

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (sortMode) {
      case "az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    return filtered;
  }, [searchTerm, sortMode, activeCategory, allProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">All Peptides</h1>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-600">Filter:</span>
          {[
            { label: "A - Z", value: "az" },
            { label: "Z - A", value: "za" },
            { label: "Price ↑", value: "price-asc" },
            { label: "Price ↓", value: "price-desc" },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setSortMode(f.value)}
              className={`filter-btn ${sortMode === f.value ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search peptide..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-20 space-y-1">
            <button
              onClick={() => setActiveCategory(null)}
              className={`sidebar-category w-full text-left text-sm font-medium ${
                !activeCategory ? "active" : ""
              }`}
            >
              All Peptides ({allProducts.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.slug ? null : cat.slug
                  )
                }
                className={`sidebar-category w-full text-left text-sm ${
                  activeCategory === cat.slug ? "active" : ""
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {displayProducts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No peptides found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
