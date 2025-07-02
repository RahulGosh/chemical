import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Beaker, Pill, ArrowRight, Users, Globe, Award, TrendingUp } from 'lucide-react';

const BusinessSegments: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const segments = [
    {
      id: 'specialty-chemicals',
      title: 'Specialty Chemicals',
      icon: Factory,
      color: 'bg-blue-600',
      description: 'High-performance specialty chemicals for pharmaceutical and industrial applications',
      details: {
        overview: 'Our specialty chemicals division focuses on manufacturing high-quality intermediates and fine chemicals used in pharmaceutical synthesis and various industrial applications.',
        products: [
          'Pharmaceutical Intermediates',
          'Fine Chemicals',
          'Custom Synthesis',
          'Process Development'
        ],
        markets: ['Pharmaceutical Industry', 'Agrochemicals', 'Specialty Applications'],
        capabilities: [
          'Multi-step synthesis',
          'Scale-up from lab to commercial',
          'Quality control and assurance',
          'Regulatory compliance'
        ]
      }
    },
    {
      id: 'api-manufacturing',
      title: 'API Manufacturing',
      icon: Beaker,
      color: 'bg-red-600',
      description: 'Active Pharmaceutical Ingredients manufactured to international quality standards',
      details: {
        overview: 'Our API manufacturing division produces high-quality Active Pharmaceutical Ingredients with complete regulatory compliance and documentation.',
        products: [
          'Cardiovascular APIs',
          'Anti-diabetic APIs',
          'Neurological APIs',
          'Gastrointestinal APIs'
        ],
        markets: ['Generic Drug Manufacturers', 'Pharmaceutical Companies', 'International Markets'],
        capabilities: [
          'WHO-GMP certified facilities',
          'DMF filing support',
          'Process optimization',
          'Analytical development'
        ]
      }
    },
    {
      id: 'pharmaceutical-formulations',
      title: 'Pharmaceutical Formulations',
      icon: Pill,
      color: 'bg-green-600',
      description: 'Complete pharmaceutical formulations from development to commercial production',
      details: {
        overview: 'We provide comprehensive pharmaceutical formulation services from concept to commercial production, ensuring quality and regulatory compliance.',
        products: [
          'Tablets',
          'Capsules',
          'Oral Liquids',
          'Topical Formulations'
        ],
        markets: ['Pharmaceutical Companies', 'Healthcare Providers', 'Export Markets'],
        capabilities: [
          'Formulation development',
          'Stability studies',
          'Packaging solutions',
          'Regulatory submissions'
        ]
      }
    }
  ];

  const stats = [
    { number: '150+', label: 'Products Manufactured' },
    { number: '25+', label: 'Countries Served' },
    { number: '500+', label: 'Clients Worldwide' },
    { number: '16+', label: 'Years Experience' }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Segments</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions across specialty chemicals, API manufacturing, and formulations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Segments Cards */}
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
              Our Core Business Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any segment to explore detailed information about our capabilities and offerings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedSegment(selectedSegment === segment.id ? null : segment.id)}
              >
                <div className="p-8">
                  <div className={`${segment.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <segment.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{segment.title}</h3>
                  <p className="text-gray-600 mb-6">{segment.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed View */}
          <AnimatePresence>
            {selectedSegment && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {segments.map((segment) => (
                  segment.id === selectedSegment && (
                    <div key={segment.id} className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`${segment.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                          <segment.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{segment.title}</h3>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                          <p className="text-gray-600 mb-6">{segment.details.overview}</p>

                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Products</h4>
                          <ul className="space-y-2 mb-6">
                            {segment.details.products.map((product, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                {product}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Target Markets</h4>
                          <ul className="space-y-2 mb-6">
                            {segment.details.markets.map((market, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <Globe className="w-4 h-4 text-blue-600 mr-3" />
                                {market}
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                          <ul className="space-y-2">
                            {segment.details.capabilities.map((capability, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <Award className="w-4 h-4 text-green-600 mr-3" />
                                {capability}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Delivering excellence across all business segments with measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
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
              Why Choose Our Business Segments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive advantages that set us apart in each business area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Quality Excellence',
                description: 'ISO certified processes with stringent quality control measures'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced professionals with deep industry knowledge'
              },
              {
                icon: TrendingUp,
                title: 'Innovation Focus',
                description: 'Continuous R&D investment for cutting-edge solutions'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Established presence in 25+ countries worldwide'
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSegments;