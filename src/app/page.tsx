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
      <section className="hero-section py-20 md:py-28">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Research-Grade Peptides
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block">Certified Peptides</span>
            <span className="block text-accent mt-2">for Scientific Research</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Premium quality peptides with third-party testing and certification. Trusted by laboratories worldwide.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/all-peptides"
              className="bg-accent hover:bg-teal-400 text-primary font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Browse All Peptides
            </Link>
            <Link
              href="/certifications"
              className="border-2 border-white/30 hover:border-white text-white font-medium px-8 py-3 rounded-full transition-all"
            >
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { name: "Shop All", href: "/all-peptides", color: "bg-[#1a3a4a]" },
            { name: "Peptides For Sale", href: "/category/peptides-for-sale", color: "bg-[#1a3a4a]" },
            { name: "Peptide Blends", href: "/category/peptide-blends", color: "bg-[#1a3a4a]" },
            { name: "Popular Peptides", href: "/category/popular-peptides", color: "bg-[#1a3a4a]" },
            { name: "Bioregulators", href: "/category/bioregulators", color: "bg-[#1a3a4a]" },
            { name: "Cosmetic Peptides", href: "/category/cosmetic-peptides", color: "bg-[#1a3a4a]" },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`${cat.color} rounded-xl p-5 text-white text-center hover:bg-[#2d6a7a] transition-all shadow-lg hover:shadow-xl`}
            >
              <div className="text-sm font-semibold">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-primary">
              All peptides are listed here, search the peptide that you want.
            </h2>
            <Link
              href="/all-peptides"
              className="text-sm text-accent hover:underline font-medium"
            >
              Frequently Asked Questions before ordering →
            </Link>
          </div>
          <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            {products.length} Products
          </span>
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
