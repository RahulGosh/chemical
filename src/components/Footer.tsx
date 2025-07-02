import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Business Segments', href: '/business-segments' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const businessInfo = [
    { name: 'API Manufacturing', href: '/api-manufacturing' },
    { name: 'Specialty Chemicals', href: '/business-segments' },
    { name: 'Pharmaceutical Formulations', href: '/business-segments' },
    { name: 'Contract Manufacturing', href: '/manufacturing' }
  ];

  const investorLinks = [
    { name: 'Annual Reports', href: '/investor-relations' },
    { name: 'Financial Results', href: '/investor-relations' },
    { name: 'Corporate Governance', href: '/investor-relations' },
    { name: 'Investor Presentations', href: '/investor-relations' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">Sudarshan</span>
                <span className="text-secondary-400 text-sm leading-tight">Pharma Industries</span>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Leading pharmaceutical and specialty chemicals company, manufacturing high-quality APIs and formulations for global markets since 2008.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm text-secondary-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm text-secondary-300">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-sm text-secondary-300">info@sudarshanpharma.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Business Areas</h3>
            <ul className="space-y-3">
              {businessInfo.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Investor Links & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Investor Relations</h3>
            <ul className="space-y-3 mb-8">
              {investorLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-secondary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-secondary-400 text-sm">
            © 2024 Sudarshan Pharma Industries Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-400 hover:text-primary-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;