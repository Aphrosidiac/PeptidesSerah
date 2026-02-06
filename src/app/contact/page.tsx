import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-light rounded-xl p-8">
          <Mail className="text-primary mb-4" size={32} />
          <h2 className="text-xl font-bold text-primary mb-2">Email Support</h2>
          <p className="text-gray-600 text-sm mb-4">
            For inquiries about products, orders, or general questions, reach out
            to our support team.
          </p>
          <p className="text-accent font-medium">support@utherpeptide.com</p>
        </div>
        <div className="bg-light rounded-xl p-8">
          <MessageCircle className="text-primary mb-4" size={32} />
          <h2 className="text-xl font-bold text-primary mb-2">Live Chat</h2>
          <p className="text-gray-600 text-sm mb-4">
            Our team is available 24/7 to assist you with any questions or
            concerns.
          </p>
          <p className="text-accent font-medium">Available 24/7</p>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> This is a display-only catalog website. For actual
          purchases, please visit the official Serah Peptides website.
        </p>
      </div>
    </div>
  );
}
