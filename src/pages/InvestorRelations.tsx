import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, TrendingUp, Calendar, Users, Building } from 'lucide-react';

const InvestorRelations: React.FC = () => {
  const reports = [
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive annual report with financial statements and business overview',
      type: 'Annual Report',
      date: 'March 2024',
      size: '2.5 MB',
      icon: FileText
    },
    {
      title: 'Q4 2023 Financial Results',
      description: 'Quarterly financial results and performance analysis',
      type: 'Financial Results',
      date: 'January 2024',
      size: '1.8 MB',
      icon: TrendingUp
    },
    {
      title: 'Corporate Governance Report',
      description: 'Corporate governance practices and compliance report',
      type: 'Governance',
      date: 'December 2023',
      size: '1.2 MB',
      icon: Building
    },
    {
      title: 'Investor Presentation Q4 2023',
      description: 'Quarterly investor presentation with key highlights',
      type: 'Presentation',
      date: 'January 2024',
      size: '3.1 MB',
      icon: Users
    }
  ];

  const financialHighlights = [
    { metric: 'Revenue', value: '₹250 Cr', growth: '+15%' },
    { metric: 'EBITDA', value: '₹45 Cr', growth: '+18%' },
    { metric: 'Net Profit', value: '₹28 Cr', growth: '+22%' },
    { metric: 'Export Revenue', value: '₹180 Cr', growth: '+12%' }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Transparent communication and comprehensive financial information for our valued investors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
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
              Financial Highlights FY 2023
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong financial performance demonstrating consistent growth and operational excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.metric}</h3>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                  {highlight.value}
                </div>
                <div className="text-green-600 font-medium">{highlight.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports and Documents */}
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
              Reports & Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our latest financial reports, presentations, and corporate governance documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <report.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{report.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {report.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{report.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{report.date}</span>
                        </div>
                        <span>{report.size}</span>
                      </div>
                      
                      <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Information */}
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
                Investor Information
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Stay informed with our latest investor updates, financial results, and corporate announcements.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Investor Relations Contact</h3>
                  <p className="text-blue-200">Email: investors@sudarshanpharma.com</p>
                  <p className="text-blue-200">Phone: +91 123 456 7890</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Stock Information</h3>
                  <p className="text-blue-200">BSE: 543210</p>
                  <p className="text-blue-200">NSE: SUDARSHAN</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Registrar & Transfer Agent</h3>
                  <p className="text-blue-200">Link Intime India Pvt. Ltd.</p>
                  <p className="text-blue-200">Mumbai, Maharashtra</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Key Dates</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-700">
                  <span>Q1 FY25 Results</span>
                  <span className="font-semibold">July 15, 2024</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-700">
                  <span>AGM 2024</span>
                  <span className="font-semibold">September 30, 2024</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-700">
                  <span>Q2 FY25 Results</span>
                  <span className="font-semibold">October 15, 2024</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span>Dividend Payment</span>
                  <span className="font-semibold">November 30, 2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorRelations;