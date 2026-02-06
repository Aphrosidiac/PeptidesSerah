"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [buyDropdown, setBuyDropdown] = useState(false);

  const navCategories = [
    { name: "Peptides for Sale", href: "/category/peptides-for-sale" },
    { name: "Popular Peptides", href: "/category/popular-peptides" },
    { name: "Bioregulators", href: "/category/bioregulators" },
    { name: "Cosmetic Peptides", href: "/category/cosmetic-peptides" },
    { name: "Melanotan Peptides", href: "/category/melanotan-peptides" },
    { name: "Peptide Blends", href: "/category/peptide-blends" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-primary">
              UTHER
            </span>
            <span className="text-xs text-gray-500 hidden sm:block">PEPTIDE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/all-peptides"
              className="text-sm font-medium text-gray-700 hover:text-primary transition"
            >
              All Peptides
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setBuyDropdown(true)}
              onMouseLeave={() => setBuyDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition">
                Buy Peptides <ChevronDown size={14} />
              </button>
              {buyDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[220px] border">
                  {navCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-light hover:text-primary transition"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-primary transition"
            >
              Company
            </Link>
            <Link
              href="/research"
              className="text-sm font-medium text-gray-700 hover:text-primary transition"
            >
              Research
            </Link>
            <Link
              href="/certifications"
              className="text-sm font-medium text-gray-700 hover:text-primary transition"
            >
              Certifications
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition"
            >
              Contact
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <Link href="/all-peptides" className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={18} className="text-gray-600" />
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full relative cursor-default">
              <ShoppingCart size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/all-peptides"
              className="block py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              All Peptides
            </Link>
            {navCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="block py-2 text-sm text-gray-600 pl-4"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/research"
              className="block py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/certifications"
              className="block py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Certifications
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
