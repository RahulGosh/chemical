import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Factory, Beaker, Users, Globe, Award, TrendingUp, Package, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [counters, setCounters] = useState({ experience: 0, clients: 0, countries: 0 });
  
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const targets = { experience: 16, clients: 150, countries: 25 };
      const intervals = {};

      Object.keys(targets).forEach(key => {
        const target = targets[key];
        const increment = target / (duration / 50);
        let current = 0;

        intervals[key] = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(intervals[key]);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a7e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Pharmaceutical manufacturing facility"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-blue-700/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={childVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Pharmaceutical Solutions
              <br />
              <span className="text-blue-300">Manufactured with Excellence</span>
            </motion.h1>
            
            <motion.p
              variants={childVariants}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              A trusted partner for API, formulations, and specialty chemicals with a strong presence in domestic and international markets.
            </motion.p>
            
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/about"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 cursor-pointer"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Business Areas */}
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
              Our Business Verticals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions across multiple business segments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Ethical Marketing",
                description: "Domestic marketing of branded & unbranded generics through our own distribution network across 5 states",
                color: "bg-blue-600",
                image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              },
              {
                icon: ClipboardList,
                title: "Contract Manufacturing",
                description: "Pharmaceutical formulations for leading companies and institutional clients like AFMSD, L&T",
                color: "bg-green-600",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                icon: Beaker,
                title: "Specialty Chemicals",
                description: "Manufacturing and sourcing of specialty chemicals, drugs and intermediates as per client specifications",
                color: "bg-purple-600",
                image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Business Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in specialty chemicals, intermediates and Active Pharmaceutical Ingredients (APIs) with wide applications across pharma, paint, food and adhesive industries. Our operations are supported by FDA and WHO approved manufacturing facilities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We offer contract manufacturing services for pharmaceutical formulations with agreements spanning 1-3 years, currently partnered with four pharmaceutical companies. Our product portfolio includes tablets, capsules, dry powder, injections and more under our own brands like Jivan Kit, Setdown, and Pulmo relief.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8111a5a9b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Quality control in pharmaceutical manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Global Reach</h3>
                    <p className="mt-2">Exporting formulations & APIs to Eurasia, Africa & South East Asia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Competitive Advantages</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              What sets us apart in the pharmaceutical industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "Regulatory Compliance",
                description: "FDA and WHO approved manufacturing facilities with stringent quality controls",
                image: "https://images.unsplash.com/photo-1581093057305-25a0a6b9a0c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                icon: Globe,
                title: "Make in India",
                description: "Developing indigenous products to compete with global markets",
                image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
              },
              {
                icon: TrendingUp,
                title: "Innovation Focus",
                description: "Expertise in formulation development and customized solutions",
                image: "https://images.unsplash.com/photo-1581094794327-5c7c6a8a6e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-blue-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                {counters.experience}+
              </div>
              <div className="text-lg text-blue-200">Years of Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                {counters.clients}+
              </div>
              <div className="text-lg text-blue-200">Satisfied Clients</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                {counters.countries}+
              </div>
              <div className="text-lg text-blue-200">Export Markets</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;