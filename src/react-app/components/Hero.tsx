import { ArrowRight, Shield, CloudCog } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by Enterprise Clients</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Cloud Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Built for Compliance
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Expert IT consultancy specializing in cloud infrastructure, intelligent archiving solutions, 
            and comprehensive data compliance. We help organizations transform their technology while 
            maintaining the highest security standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-semibold flex items-center justify-center gap-2"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-700 px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all font-semibold"
            >
              Explore Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CloudCog className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Migration</h3>
              <p className="text-gray-600">Seamless transition to modern cloud infrastructure</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Compliance</h3>
              <p className="text-gray-600">Meet regulatory requirements with confidence</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-purple-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Archiving</h3>
              <p className="text-gray-600">Efficient data retention and retrieval systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
