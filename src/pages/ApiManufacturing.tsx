import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Shield, Award, Globe, CheckCircle, FileText } from 'lucide-react';

const ApiManufacturing: React.FC = () => {
  const apiCategories = [
    {
      category: 'Cardiovascular APIs',
      products: ['Atorvastatin', 'Metoprolol', 'Amlodipine', 'Losartan'],
      description: 'High-quality APIs for cardiovascular medications'
    },
    {
      category: 'Anti-diabetic APIs',
      products: ['Metformin', 'Glimepiride', 'Pioglitazone', 'Sitagliptin'],
      description: 'APIs for diabetes management and treatment'
    },
    {
      category: 'Neurological APIs',
      products: ['Pregabalin', 'Gabapentin', 'Levetiracetam', 'Donepezil'],
      description: 'APIs for neurological and psychiatric conditions'
    },
    {
      category: 'Gastrointestinal APIs',
      products: ['Omeprazole', 'Pantoprazole', 'Domperidone', 'Ondansetron'],
      description: 'APIs for digestive system disorders'
    }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'WHO-GMP Certified',
      description: 'All our API manufacturing facilities are WHO-GMP certified with regular audits'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Stringent quality control measures throughout the manufacturing process'
    },
    {
      icon: FileText,
      title: 'Regulatory Support',
      description: 'Complete documentation and regulatory filing support including DMF'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Manufacturing according to international pharmacopoeia standards'
    }
  ];

  const processes = [
    {
      step: '01',
      title: 'Raw Material Testing',
      description: 'Comprehensive testing of all incoming raw materials for quality and purity'
    },
    {
      step: '02',
      title: 'Synthesis & Processing',
      description: 'Multi-step synthesis with real-time monitoring and process control'
    },
    {
      step: '03',
      title: 'Quality Control',
      description: 'In-process and final product testing using advanced analytical methods'
    },
    {
      step: '04',
      title: 'Packaging & Dispatch',
      description: 'Secure packaging and cold chain management for sensitive APIs'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">API Manufacturing</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Premium Active Pharmaceutical Ingredients manufactured with precision, quality, and regulatory compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our API Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of Active Pharmaceutical Ingredients across therapeutic categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Beaker className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Products:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous quality-controlled process ensuring consistent API quality and purity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our API Manufacturing Capabilities
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              State-of-the-art facilities and expertise for high-quality API production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <p className="text-blue-200">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Uncompromising Quality Standards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our API manufacturing follows the highest international quality standards, 
                ensuring consistent product quality and regulatory compliance across all markets.
              </p>
              
              <div className="space-y-4">
                {[
                  'WHO-GMP Certified Manufacturing Facilities',
                  'ICH Guidelines Compliance',
                  'US FDA, EU GMP, and Health Canada Standards',
                  'Complete Chain of Custody Documentation',
                  'Advanced Analytical Testing Methods',
                  'Stability Studies as per ICH Guidelines'
                ].map((standard, index) => (
                  <motion.div
                    key={standard}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Certifications</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-blue-900">WHO-GMP</h4>
                    <p className="text-sm text-blue-700">World Health Organization - Good Manufacturing Practice</p>
                  </div>
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-green-900">ISO 9001:2015</h4>
                    <p className="text-sm text-green-700">Quality Management System Certification</p>
                  </div>
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-red-900">ISO 14001:2015</h4>
                    <p className="text-sm text-red-700">Environmental Management System</p>
                  </div>
                  <Award className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Manufacturing Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that showcase our commitment to quality and global reach
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'API Products' },
              { number: '500', label: 'MT Annual Capacity' },
              { number: '25+', label: 'Countries Served' },
              { number: '99.9%', label: 'Quality Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiManufacturing;