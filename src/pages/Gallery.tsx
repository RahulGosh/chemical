import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, Camera, Award, Users, Building } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'factory', name: 'Manufacturing', icon: Building },
    { id: 'events', name: 'Events', icon: Users },
    { id: 'awards', name: 'Awards', icon: Award }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1267331/pexels-photo-1267331.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'factory',
      title: 'Manufacturing Facility',
      description: 'State-of-the-art pharmaceutical manufacturing plant'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'factory',
      title: 'Quality Control Lab',
      description: 'Advanced analytical testing laboratory'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3985133/pexels-photo-3985133.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'factory',
      title: 'Production Line',
      description: 'Automated pharmaceutical production line'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Industry Conference',
      description: 'Participating in pharmaceutical industry conference'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Team Meeting',
      description: 'Strategic planning session with leadership team'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'awards',
      title: 'Excellence Award',
      description: 'Recognition for quality manufacturing standards'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3985164/pexels-photo-3985164.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'factory',
      title: 'Research & Development',
      description: 'R&D laboratory for new product development'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Product Launch',
      description: 'New pharmaceutical product launch event'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Explore our facilities, achievements, and milestones through our visual journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {images.find(img => img.id === selectedImage) && (
                <div className="bg-white rounded-lg overflow-hidden">
                  <img
                    src={images.find(img => img.id === selectedImage)?.src}
                    alt={images.find(img => img.id === selectedImage)?.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {images.find(img => img.id === selectedImage)?.title}
                    </h3>
                    <p className="text-gray-600">
                      {images.find(img => img.id === selectedImage)?.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Milestones and achievements that define our success story
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3', label: 'Manufacturing Plants' },
              { number: '500+', label: 'Products Manufactured' },
              { number: '25+', label: 'Awards Received' },
              { number: '100+', label: 'Industry Events' }
            ].map((stat, index) => (
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
    </div>
  );
};

export default Gallery;