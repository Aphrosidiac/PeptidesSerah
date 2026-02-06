import { Shield, Award, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">About Uther Peptide</h1>

      <div className="prose max-w-none">
        <p className="text-gray-600 leading-relaxed mb-6">
          Uther Peptide is a global supplier of research-grade peptides, dedicated to
          providing the highest quality products for scientific research and laboratory
          use. Our commitment to excellence ensures that every peptide we produce meets
          the strictest standards of purity and consistency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="bg-light rounded-xl p-6 text-center">
            <Shield className="text-primary mx-auto mb-3" size={32} />
            <h3 className="font-bold text-primary mb-2">Highest Quality</h3>
            <p className="text-sm text-gray-600">
              We produce only high-quality peptides to ensure reliable scientific
              research results.
            </p>
          </div>
          <div className="bg-light rounded-xl p-6 text-center">
            <Award className="text-primary mx-auto mb-3" size={32} />
            <h3 className="font-bold text-primary mb-2">Certified Testing</h3>
            <p className="text-sm text-gray-600">
              All peptides undergo strict third-party testing for purity, accuracy,
              and consistency.
            </p>
          </div>
          <div className="bg-light rounded-xl p-6 text-center">
            <Clock className="text-primary mx-auto mb-3" size={32} />
            <h3 className="font-bold text-primary mb-2">24/7 Services</h3>
            <p className="text-sm text-gray-600">
              We offer 24/7 support for quick responses and seamless order
              assistance.
            </p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed">
          Our team of experts works tirelessly to maintain the highest standards in
          peptide synthesis and quality control. We are proud to serve researchers
          and laboratories worldwide with products they can trust.
        </p>
      </div>
    </div>
  );
}
