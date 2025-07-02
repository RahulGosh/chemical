import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Users, Globe, Target, Eye, Heart, Shield, CheckCircle, 
  Factory, FlaskConical, Pill, Rocket, Trophy, BarChart2, Leaf, Handshake, ClipboardSignature, 
  ChevronDown
} from 'lucide-react';

const About: React.FC = () => {
  // Floating particles animation
  const Particle = ({ style }: { style: object }) => (
    <motion.div
      className="absolute rounded-full bg-blue-400/20"
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, -100, -200],
        opacity: [0, 1, 0],
        x: [0, Math.random() * 100 - 50]
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "linear"
      }}
      style={style}
    />
  );

  // Certificate showcase
  const certificates = [
    // { name: "ISO 9001:2015", icon: Certificate },
    { name: "WHO-GMP", icon: Shield },
    { name: "CE Certification", icon: CheckCircle },
    { name: "FDA Approved", icon: ClipboardSignature }
  ];

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Floating particles background */}
        {[...Array(20)].map((_, i) => (
          <Particle 
            key={i} 
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} 
          />
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <Factory className="w-12 h-12 text-blue-300 mx-auto" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block">Our Pharmaceutical</span>
              <span className="text-blue-300">Journey Since 2008</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From a specialty chemicals startup to a globally recognized pharmaceutical leader
            </motion.p>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </section>

      {/* Company Evolution Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Humble Beginnings to Global Presence
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our transformation timeline showcases key milestones in our pharmaceutical journey
            </p>
          </motion.div>

          {/* Animated timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 hidden md:block"></div>
            
            <div className="space-y-20 md:space-y-32">
              {[
                {
                  year: "2008",
                  title: "Company Founded",
                  content: "Originally incorporated as 'Sudarshan Specialty Chemsolve Private Limited' in Mumbai",
                  icon: <Rocket className="w-6 h-6 text-blue-600" />
                },
                {
                  year: "2010",
                  title: "First Expansion",
                  content: "Began manufacturing operations with focus on specialty chemicals and intermediates",
                  icon: <Factory className="w-6 h-6 text-blue-600" />
                },
                {
                  year: "2016",
                  title: "Public Listing",
                  content: "Transitioned to 'Sudarshan Pharma Industries Limited' as a public limited company",
                  icon: <BarChart2 className="w-6 h-6 text-blue-600" />
                },
                {
                  year: "2018",
                  title: "Global Reach",
                  content: "Expanded exports to UK, Australia, Uzbekistan, Syria, Oman, Taiwan & MENA regions",
                  icon: <Globe className="w-6 h-6 text-blue-600" />
                },
                {
                  year: "Present",
                  title: "Diversified Leader",
                  content: "Operating across pharmaceuticals and specialty chemicals with FDA/WHO approved facilities",
                  icon: <Trophy className="w-6 h-6 text-blue-600" />
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center`}
                >
                  <div className={`w-full md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.03 }}
                      className="bg-white shadow-xl rounded-xl p-8 border border-gray-100 relative overflow-hidden"
                    >
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <span className="text-blue-600 mr-3">{item.icon}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <div className="text-blue-900 font-bold text-lg mb-3">{item.year}</div>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
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
                Our Visionary Leadership
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Mehta brothers - Mr. Hemal V Mehta & Mr. Sachin V Mehta - bring over 25 years of combined experience in the Special Chemical, Bulk drug and Pharmaceutical Industry.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Their passion for building an integrated chemical and pharmaceutical company has been the pillar of our company's growth and drives its strong value system.
              </p>
              <div className="space-y-3">
                {[
                  '25+ Years Combined Experience',
                  'Specialty Chemicals Experts',
                  'Pharmaceutical Industry Veterans',
                  'Global Business Visionaries'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-1 shadow-xl">
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Leadership cards */}
                    {[
                      {
                        name: "Mr. Hemal V Mehta",
                        role: "Managing Director",
                        expertise: "Specialty Chemicals",
                        icon: <FlaskConical className="w-8 h-8 text-blue-600" />
                      },
                      {
                        name: "Mr. Sachin V Mehta",
                        role: "Executive Director",
                        expertise: "Pharmaceuticals",
                        icon: <Pill className="w-8 h-8 text-blue-600" />
                      }
                    ].map((leader, index) => (
                      <motion.div
                        key={leader.name}
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                      >
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            {leader.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{leader.name}</h4>
                            <p className="text-blue-600 text-sm">{leader.role}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{leader.expertise} Expert</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our Guiding Principles
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundation that drives our pharmaceutical excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-300 mr-4" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  We shall be amongst premier chemical companies and have to achieve our company name in list of fortune 500 companies by:
                </p>
                <ul className="space-y-3">
                  {[
                    "Leveraging science to deliver new and innovative offerings",
                    "Enhancing value to our customers",
                    "Delivering superior returns to our Investors"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-green-300 mr-4" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-green-100 mb-6">
                  Our mission is to achieve our Vision to reach the level of putting our company in the list of fortune 500 companies.
                </p>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center">
                    <Heart className="w-6 h-6 text-green-300 mr-3" />
                    <span className="font-medium">Serving society through science</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Business Section */}
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
              Our Core Business Verticals
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified operations across pharmaceuticals and specialty chemicals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Specialty Chemicals",
                icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
                description: "Specialty chemicals and intermediates with wide-ranging applications in pharma, paint, food and adhesive Industry",
                highlights: [
                  "Custom synthesis",
                  "Bulk drug intermediates",
                  "Import/export expertise"
                ]
              },
              {
                title: "Pharmaceuticals",
                icon: <Pill className="w-8 h-8 text-blue-600" />,
                description: "Diversified business in pharmaceutical industry with domestic and international presence",
                highlights: [
                  "Branded & unbranded generics",
                  "Own distribution network",
                  "5 state coverage"
                ]
              },
              {
                title: "Contract Manufacturing",
                icon: <Handshake className="w-8 h-8 text-blue-600" />,
                description: "Supply of generic pharma formulations to healthcare institutions, Government, NGO and Hospitals",
                highlights: [
                  "FDA/WHO approved facilities",
                  "100+ generic products",
                  "Institutional clients"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <div className="space-y-3">
                    {item.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Recognitions that validate our commitment to quality and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 rounded-xl p-8 text-center backdrop-blur-sm border border-white/20"
              >
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{cert.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-blue-200"
          >
            <p>We sincerely thank each & every stakeholder in helping us achieve these certificates.</p>
            <p className="mt-2">We strive to add many more such Certificates in our kitty and give value addition to our esteemed Customers.</p>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
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
              Global Footprint
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expanding our pharmaceutical excellence across borders
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-inner"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">International Markets</h3>
                <p className="text-gray-600 mb-6">
                  Our products have been successfully exported to the UK, Australia, Uzbekistan, Syria, Oman, Taiwan, and MENA regions.
                </p>
                <p className="text-gray-600 mb-6">
                  We regularly participate in trade fairs and exhibitions in India and abroad, especially in Europe and the Gulf countries, to strengthen our international presence.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["UK", "Australia", "Uzbekistan", "Syria", "Oman", "Taiwan", "MENA"].map((country) => (
                    <span key={country} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-64 lg:h-96">
                {/* World map placeholder - in a real implementation you would use an actual world map SVG */}
                <div className="absolute inset-0 bg-blue-200 rounded-xl flex items-center justify-center">
                  <Globe className="w-32 h-32 text-blue-600 opacity-30" />
                  <div className="absolute flex flex-col items-center">
                    <div className="text-blue-900 font-bold text-lg">25+ Countries</div>
                    <div className="text-blue-800">Served Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;