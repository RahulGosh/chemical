import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, MapPin, Users, Phone, Mail, Send } from 'lucide-react';

const Manufacturing: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const facilities = [
    {
      id: 1,
      name: 'Mumbai Manufacturing Unit',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.pexels.com/photos/1267331/pexels-photo-1267331.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialization: 'API Manufacturing',
      capacity: '500 MT/Year',
      certifications: ['WHO-GMP', 'ISO 9001:2015', 'ISO 14001:2015']
    },
    {
      id: 2,
      name: 'Pune Specialty Chemicals Plant',
      location: 'Pune, Maharashtra',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialization: 'Specialty Chemicals',
      capacity: '1000 MT/Year',
      certifications: ['ISO 9001:2015', 'REACH Compliance', 'FDA Registered']
    },
    {
      id: 3,
      name: 'Hyderabad Formulation Unit',
      location: 'Hyderabad, Telangana',
      image: 'https://images.pexels.com/photos/3985133/pexels-photo-3985133.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialization: 'Pharmaceutical Formulations',
      capacity: '100 Million Units/Year',
      certifications: ['WHO-GMP', 'ISO 9001:2015', 'Schedule M']
    }
  ];

  const exportRegions = [
    {
      region: 'Africa',
      countries: ['Nigeria', 'Kenya', 'Ghana', 'Tanzania', 'South Africa'],
      volume: '35%',
      color: 'bg-blue-500'
    },
    {
      region: 'Asia',
      countries: ['Philippines', 'Vietnam', 'Thailand', 'Indonesia', 'Malaysia'],
      volume: '30%',
      color: 'bg-green-500'
    },
    {
      region: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Jordan', 'Lebanon', 'Iraq'],
      volume: '25%',
      color: 'bg-red-500'
    },
    {
      region: 'Latin America',
      countries: ['Brazil', 'Colombia', 'Peru', 'Ecuador', 'Bolivia'],
      volume: '10%',
      color: 'bg-yellow-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Manufacturing & Exports</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              State-of-the-art manufacturing facilities serving global markets with quality and reliability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
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
              Our Manufacturing Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced manufacturing plants equipped with modern technology and certified quality systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{facility.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{facility.specialization}</p>
                  <p className="text-gray-600 mb-4">Capacity: {facility.capacity}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {facility.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
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
              Global Export Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving customers across 25+ countries with reliable supply chains and quality products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exportRegions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{region.region}</h3>
                  <div className={`${region.color} w-4 h-4 rounded-full`}></div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Export Volume</span>
                    <span className="font-bold text-gray-900">{region.volume}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${region.color} h-2 rounded-full`}
                      style={{ width: region.volume }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Countries:</h4>
                  <ul className="space-y-1">
                    {region.countries.slice(0, 3).map((country, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                        {country}
                      </li>
                    ))}
                    {region.countries.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{region.countries.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Get in touch to discuss your manufacturing and export requirements. 
                Our team is ready to provide customized solutions for your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-blue-200">+91 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-blue-200">exports@sudarshanpharma.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-blue-200">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;