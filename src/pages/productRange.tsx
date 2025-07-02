import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FlaskConical, TestTube, Pill, Factory, 
  ChevronDown, Search, ArrowRight, 
  Leaf, Droplets, Paintbrush, Atom, Shirt,
  CheckCircle
} from 'lucide-react';

const ProductRange: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Categories with icons and colors
  const categories = [
    {
      name: 'Fine Chemicals & Solvents',
      icon: <FlaskConical className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-800',
      products: [
        '2 Ethyl Hexyl Acrylate', 'N-Heptane', '2 Ethyl Hexanoic Acid',
        '1-Bromo-3Chloropropane', '1.4. Dioxane', '2,2, Di Methoxy Propane',
        'Acetone', 'Acetonitrile', 'Acrylic Acid', 'Butyl Acetate'
      ]
    },
    {
      name: 'Agro Chemicals',
      icon: <Leaf className="w-6 h-6" />,
      color: 'bg-green-100 text-green-800',
      products: [
        'Pesticide Intermediates', 'Herbicide Components',
        'Fungicide Bases', 'Crop Protection Chemicals'
      ]
    },
    {
      name: 'Paints & Coatings',
      icon: <Paintbrush className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-800',
      products: [
        'Resins & Binders', 'Pigment Dispersions',
        'Additives for Paints', 'Coating Solvents',
        'Epoxy Hardeners', 'UV Cure Components'
      ]
    },
    {
      name: 'Textile Chemicals',
      icon: <Shirt className="w-6 h-6" />,
      color: 'bg-red-100 text-red-800',
      products: [
        'Dye Intermediates', 'Fabric Softeners',
        'Water Repellents', 'Flame Retardants',
        'Textile Auxiliaries'
      ]
    },
    {
      name: 'Water Treatment',
      icon: <Droplets className="w-6 h-6" />,
      color: 'bg-cyan-100 text-cyan-800',
      products: [
        'Corrosion Inhibitors', 'Biocides',
        'Scale Inhibitors', 'Flocculants',
        'pH Adjusters'
      ]
    },
    {
      name: 'Pharmaceutical Intermediates',
      icon: <Pill className="w-6 h-6" />,
      color: 'bg-indigo-100 text-indigo-800',
      products: [
        'API Precursors', 'Excipients',
        'Formulation Aids', 'Drug Delivery Enhancers'
      ]
    }
  ];

  // All products for search functionality
  const allProducts = categories.flatMap(category => 
    category.products.map(product => ({
      name: product,
      category: category.name
    }))
  );

  const filteredProducts = searchTerm 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Product Range</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Premium specialty chemicals for diverse industrial applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Chemical Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sudarshan Pharma Industries Limited is a prominent manufacturer and supplier of speciality chemicals across India, the Middle East, South East Asia, and the Pacific. We are renowned for our state-of-the-art manufacturing plants and reliable supply chain.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With expertise in exporting fine chemicals, solvents, agro chemicals, and many other specialty products, we cater to a diverse range of industries from paints and coatings to pharmaceuticals and water treatment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Factory className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Manufacturing Excellence</h3>
                  <p className="text-blue-700">State-of-the-art facilities producing A-grade specialty chemicals</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for chemicals or categories..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {searchTerm && filteredProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 max-w-4xl mx-auto"
              >
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Search Results for "{searchTerm}"
                  </h3>
                  <div className="divide-y divide-gray-200">
                    {filteredProducts.map((product, index) => (
                      <div key={index} className="py-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-900 font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.category}</p>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Chemical Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our wide range of specialty chemicals by category
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className={`${category.color} p-6 flex items-center`}
                  onClick={() => setExpandedCategory(expandedCategory === category.name ? null : category.name)}
                >
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold flex-grow">{category.name}</h3>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {expandedCategory === category.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 border-t border-gray-200">
                        <ul className="space-y-2">
                          {category.products.map((product, index) => (
                            <li key={index} className="flex items-start">
                              <TestTube className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{product}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 text-sm text-gray-500">
                          * Plus many more specialty chemicals available
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Product List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Product Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our extensive range of specialty chemicals and formulations
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {allProducts.map((product, index) => (
                <motion.div
                  key={`${product.name}-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.01 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 border-b border-r border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-2 mr-4">
                      <Atom className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{product.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We likely manufacture it or can source it for you.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
              Request Custom Chemical
            </button>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
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
                Quality You Can Trust
              </h2>
              <p className="text-xl text-blue-200 mb-6">
                Our dedicated team works round the clock to ensure that our products meet international quality standards.
              </p>
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Certified Manufacturing",
                  "WHO-GMP Compliant Facilities",
                  "Stringent Quality Control Processes",
                  "Batch Traceability & Documentation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-blue-100 text-lg">{item}</span>
                  </div>
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
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="inline-block bg-white/20 p-6 rounded-full mb-6">
                    <FlaskConical className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Custom Formulations</h3>
                  <p className="text-blue-200 mb-6">
                    We specialize in developing custom chemical solutions tailored to your specific requirements.
                  </p>
                  <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Contact Our Chemists
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductRange;