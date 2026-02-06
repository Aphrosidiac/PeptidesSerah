"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, Award, Clock, Shield } from "lucide-react";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortMode, setSortMode] = useState<string>("az");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayProducts = useMemo(() => {
    let filtered = activeCategory
      ? getProductsByCategory(activeCategory)
      : [...products];

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
  }, [searchTerm, sortMode, activeCategory]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block">Certified Peptides</span>
            <span className="block text-accent">for Scientific Research</span>
          </h1>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Shop All", href: "/all-peptides", color: "from-teal-600 to-teal-800" },
            { name: "Peptides For Sale", href: "/category/peptides-for-sale", color: "from-cyan-600 to-cyan-800" },
            { name: "Peptide Blends", href: "/category/peptide-blends", color: "from-emerald-600 to-emerald-800" },
            { name: "Popular Peptides", href: "/category/popular-peptides", color: "from-sky-600 to-sky-800" },
            { name: "Bioregulators", href: "/category/bioregulators", color: "from-indigo-600 to-indigo-800" },
            { name: "Cosmetic Peptides", href: "/category/cosmetic-peptides", color: "from-violet-600 to-violet-800" },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`bg-gradient-to-br ${cat.color} rounded-xl p-6 text-white text-center hover:scale-105 transition-transform shadow-lg`}
            >
              <div className="text-sm font-semibold">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="max-w-7xl mx-auto px-4 pb-4">
        <div className="bg-light rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary mb-2">
            All peptides are listed here, search the peptide that you want.
          </h2>
          <Link
            href="/all-peptides"
            className="text-sm text-accent hover:underline font-medium"
          >
            Frequently Asked Questions before ordering
          </Link>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="max-w-7xl mx-auto px-4 pb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
      </section>

      {/* Sidebar + Products */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
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
                All Peptides ({products.length})
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
      </section>

      {/* Features Section */}
      <section className="bg-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-lg">
              Authoritative Certification
            </p>
            <p className="text-gray-600">for every peptide, every batch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">Highest Quality</h3>
              <p className="text-sm text-gray-600">
                We are a global peptide supplier, producing only high-quality
                peptides to ensure reliable scientific research results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">Certified Testing</h3>
              <p className="text-sm text-gray-600">
                All peptides undergo strict third-party testing, ensuring purity,
                accuracy, and consistency for laboratory research.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Clock className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-primary mb-2">24/7 Services</h3>
              <p className="text-sm text-gray-600">
                Serah Peptides Online offers 24/7 support, ensuring quick
                responses and seamless order assistance whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
