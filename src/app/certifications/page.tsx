import { Award, CheckCircle } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Peptide Certifications</h1>
      <div className="bg-light rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-primary" size={40} />
          <div>
            <h2 className="text-xl font-bold text-primary">Quality Assured</h2>
            <p className="text-gray-500 text-sm">Every peptide, every batch</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          All Uther Peptide products come with comprehensive certification
          documentation, including Certificate of Analysis (COA) and third-party
          testing results.
        </p>

        <div className="space-y-4">
          {[
            "Third-party HPLC purity testing",
            "Mass spectrometry verification",
            "Endotoxin testing",
            "Sterility testing where applicable",
            "Certificate of Analysis (COA) provided",
            "Batch-specific documentation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle className="text-accent shrink-0" size={20} />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
