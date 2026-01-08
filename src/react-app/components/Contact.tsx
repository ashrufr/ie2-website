import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.2),transparent_50%)]" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Transform Your Infrastructure
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule a consultation with our experts to discuss your cloud, archiving, 
            and compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Our team is ready to help you navigate the complexities of modern IT infrastructure. 
              Reach out today for a personalized consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-blue-100">info@cloudguard-solutions.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <div className="text-blue-100">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Office</div>
                  <div className="text-blue-100">123 Business Ave, Suite 500<br />New York, NY 10001</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-blue-900 px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
