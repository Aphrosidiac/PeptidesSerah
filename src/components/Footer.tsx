import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Disclaimer */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Disclaimer:</h3>
            <p className="text-sm leading-relaxed mb-3">
              All our products online are only sold for research, laboratory, or
              analytical purposes. NOT FOR HUMAN USAGE!
            </p>
            <p className="text-sm leading-relaxed mb-3">
              <strong className="text-white">Research use only:</strong> SERAH PEPTIDES is a chemical supplier of peptides which are only for
              research, laboratory, or analytical purposes. They are not
              permitted for human use, therapeutic, diagnostic, or clinical
              application. None of the products listed on our website are medical
              products.
            </p>
            <p className="text-sm leading-relaxed">
              <strong className="text-white">FDA Disclaimer:</strong> The
              statements made within this website have not been evaluated by the
              US Food and Drug Administration. These statements and the products
              of this company are not intended to diagnose, treat, cure or
              prevent any disease.
            </p>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm hover:text-accent transition">Our Company</Link>
              <Link href="/contact" className="block text-sm hover:text-accent transition">Contact Us</Link>
              <Link href="/research" className="block text-sm hover:text-accent transition">Research</Link>
              <Link href="/certifications" className="block text-sm hover:text-accent transition">Certifications</Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <div className="space-y-2">
              <Link href="/all-peptides" className="block text-sm hover:text-accent transition">All Peptides</Link>
              <Link href="/category/popular-peptides" className="block text-sm hover:text-accent transition">Popular Peptides</Link>
              <Link href="/category/peptides-for-sale" className="block text-sm hover:text-accent transition">Peptides for Sale</Link>
              <Link href="/category/peptide-blends" className="block text-sm hover:text-accent transition">Peptide Blends</Link>
              <Link href="/category/bioregulators" className="block text-sm hover:text-accent transition">Bioregulators</Link>
              <Link href="/category/cosmetic-peptides" className="block text-sm hover:text-accent transition">Cosmetic Peptides</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold text-white tracking-wider">
            SERAH PEPTIDES
          </div>
          <p className="text-sm text-gray-400">
            Copyright &copy; 2025 SERAH PEPTIDES. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
