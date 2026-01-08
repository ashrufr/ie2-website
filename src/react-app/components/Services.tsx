import { Cloud, Database, Shield, Server, Lock, FileArchive } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design, implement, and optimize cloud architectures on AWS, Azure, and Google Cloud Platform.',
    features: ['Multi-cloud strategy', 'Cost optimization', 'Performance tuning', 'Disaster recovery'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileArchive,
    title: 'Archiving Solutions',
    description: 'Intelligent data archiving systems that reduce storage costs while maintaining accessibility.',
    features: ['Automated lifecycle policies', 'Fast retrieval systems', 'Cost-effective storage', 'Compliance-ready'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Data Compliance',
    description: 'Comprehensive compliance solutions for GDPR, HIPAA, SOC 2, and industry-specific regulations.',
    features: ['Regulatory audits', 'Policy implementation', 'Data governance', 'Risk assessment'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Server,
    title: 'Infrastructure Modernization',
    description: 'Transform legacy systems into modern, scalable, and secure cloud-native architectures.',
    features: ['Legacy migration', 'Container orchestration', 'Microservices', 'DevOps automation'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Lock,
    title: 'Security & Encryption',
    description: 'End-to-end security solutions including encryption, access controls, and threat monitoring.',
    features: ['Zero-trust architecture', 'Data encryption', 'Identity management', '24/7 monitoring'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Strategic data management including backup, recovery, and optimization solutions.',
    features: ['Automated backups', 'Data deduplication', 'Performance optimization', 'Migration services'],
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cloud migration to compliance, we provide end-to-end consultancy services 
            tailored to your organization's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
