import { Award, Users, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock, value: '24/7', label: 'Support Available' },
];

const certifications = [
  'AWS Certified Solutions Architect',
  'Microsoft Azure Expert',
  'Google Cloud Professional',
  'CISSP Certified',
  'ISO 27001 Lead Auditor',
  'GDPR Compliance Expert',
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry-Leading Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team brings decades of combined experience and industry certifications 
            to deliver world-class solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Certified Professionals
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our consultants hold the industry's most respected certifications and 
                continuously update their skills to stay ahead of emerging technologies 
                and compliance requirements.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-blue-50 rounded-lg p-4 border border-blue-100"
                  >
                    <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
                <div className="relative h-full flex flex-col justify-center gap-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Cloud Architecture</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full" style={{ width: '95%' }} />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">95%</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Data Compliance</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '98%' }} />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">98%</span>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="text-sm text-gray-600 mb-2">Security & Encryption</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{ width: '92%' }} />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
