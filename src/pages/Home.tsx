import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Factory, Beaker, Users, Globe, Award, TrendingUp, Package, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

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

  // Hero slider images
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1581093450021-4a7360e9a7e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Pharmaceutical manufacturing facility",
      title: "Advanced Manufacturing",
      description: "State-of-the-art pharmaceutical production facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Quality control laboratory",
      title: "Quality Excellence",
      description: "Rigorous testing and quality assurance processes"
    },
    {
      src: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Research and development",
      title: "Innovation Focus",
      description: "Cutting-edge research and development capabilities"
    }
  ];

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <ImageSlider 
            images={heroImages}
            height="h-full"
            showDots={false}
            showArrows={false}
            autoPlay={true}
            interval={6000}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/60 to-secondary-900/70"></div>
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
              <span className="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">
                Manufactured with Excellence
              </span>
            </motion.h1>
            
            <motion.p
              variants={childVariants}
              className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed"
            >
              A trusted partner for API, formulations, and specialty chemicals with a strong presence in domestic and international markets.
            </motion.p>
            
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/about"
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
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
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our Business Verticals
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions across multiple business segments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Ethical Marketing",
                description: "Domestic marketing of branded & unbranded generics through our own distribution network across 5 states",
                color: "from-primary-500 to-primary-700",
                image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              },
              {
                icon: ClipboardList,
                title: "Contract Manufacturing",
                description: "Pharmaceutical formulations for leading companies and institutional clients like AFMSD, L&T",
                color: "from-success-500 to-success-700",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                icon: Beaker,
                title: "Specialty Chemicals",
                description: "Manufacturing and sourcing of specialty chemicals, drugs and intermediates as per client specifications",
                color: "from-accent-500 to-accent-700",
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-80`}></div>
                </div>
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">{item.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{item.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Core Business Expertise
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mb-6 rounded-full"></div>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                We specialize in specialty chemicals, intermediates and Active Pharmaceutical Ingredients (APIs) with wide applications across pharma, paint, food and adhesive industries. Our operations are supported by FDA and WHO approved manufacturing facilities.
              </p>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                We offer contract manufacturing services for pharmaceutical formulations with agreements spanning 1-3 years, currently partnered with four pharmaceutical companies. Our product portfolio includes tablets, capsules, dry powder, injections and more under our own brands like Jivan Kit, Setdown, and Pulmo relief.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              <ImageSlider 
                images={[
                  {
                    src: "https://images.unsplash.com/photo-1581094794329-c8111a5a9b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    alt: "Quality control in pharmaceutical manufacturing",
                    title: "Global Reach",
                    description: "Exporting formulations & APIs to Eurasia, Africa & South East Asia"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1581093057305-25a0a6b9a0c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    alt: "FDA approved facility",
                    title: "Regulatory Excellence",
                    description: "FDA and WHO approved manufacturing facilities"
                  },
                  {
                    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
                    alt: "Make in India initiative",
                    title: "Make in India",
                    description: "Supporting indigenous pharmaceutical manufacturing"
                  }
                ]}
                height="h-96"
                autoPlay={true}
                interval={4000}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Competitive Advantages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
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
                className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-primary-200">{item.description}</p>
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
              className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                {counters.experience}+
              </div>
              <div className="text-lg text-primary-200">Years of Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                {counters.clients}+
              </div>
              <div className="text-lg text-primary-200">Satisfied Clients</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                {counters.countries}+
              </div>
              <div className="text-lg text-primary-200">Export Markets</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;