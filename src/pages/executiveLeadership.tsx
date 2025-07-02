import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, User, Briefcase, GraduationCap, 
  Globe, BookOpen, BarChart2, ChevronDown 
} from 'lucide-react';

const ExecutiveLeadership: React.FC = () => {
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null);

  const leadership = [
    {
      id: 'hemal-mehta',
      name: 'Mr. Hemal V. Mehta',
      title: 'Chairman and Managing Director',
      image: '/images/hemal-mehta.jpg',
      highlights: [
        '15+ years in Specialty Chemicals, Intermediates, API and Bulk Drugs',
        'Diploma in Chemistry from Pune University',
        'Leads trade alliances with API manufacturers',
        'Regular participant in CPHI, IPEX, Chemspec exhibitions'
      ],
      bio: 'With extensive experience in sourcing and supply, Mr. Hemal has established SPIL as a leader in pharmaceutical marketing. Under his leadership, the company has expanded its global presence through strategic partnerships and trade exhibitions.'
    },
    {
      id: 'sachin-mehta',
      name: 'Mr. Sachin V. Mehta',
      title: 'Joint Managing Director and CFO',
      image: '/images/sachin-mehta.jpg',
      highlights: [
        'Expert in sourcing from Korea, Taiwan, China and Japan',
        'Diploma in Exports & Import Management',
        'Developed import substitute specialty intermediates',
        'Leads R&D for new chemical entities'
      ],
      bio: 'Mr. Sachin plays a pivotal role in SPIL\'s international procurement and product development. His leadership in R&D has resulted in innovative chemical solutions serving pesticides, paints, and coating industries.'
    },
    {
      id: 'umesh-luthra',
      name: 'Dr. Umesh Luthra, PhD',
      title: 'Independent Director',
      image: '/images/umesh-luthra.jpg',
      highlights: [
        '27 years in Biotech R&D, Project and Production',
        'PhD (Microbiology) & MBA',
        'Expert in fermentation and downstream purification',
        'Specialized in antibiotics, statins, immunosuppressants'
      ],
      bio: 'A seasoned biotech professional, Dr. Luthra brings extensive experience in process development and technology transfer. His expertise in GLP and cGMP guidelines strengthens SPIL\'s research capabilities.'
    },
    {
      id: 'jaya-sharma',
      name: 'Ms. Jaya Sharma',
      title: 'Independent Director',
      image: '/images/jaya-sharma.jpg',
      highlights: [
        'Founder of Jaya Sharma & Associates',
        'LLB from Government Law College, Mumbai',
        'Certified CSR professional and PoSH trainer',
        'Top Ten Women Legal Consultants in India 2021'
      ],
      bio: 'Ms. Sharma provides invaluable legal and corporate governance expertise. Her recognition as a leading legal consultant and commitment to continuous learning contribute significantly to SPIL\'s compliance framework.'
    },
    {
      id: 'rushabh-patil',
      name: 'Mr. Rushabh Patil',
      title: 'Independent Director',
      image: '/images/rushabh-patil.jpg',
      highlights: [
        'Practicing Advocate in Bombay High Court',
        'Expert in corporate and commercial transactions',
        'Experience in agricultural startups and FPOs',
        'Currently pursuing LLM at JGLS'
      ],
      bio: 'With his diverse experience in legal practice and agribusiness, Mr. Patil offers unique perspectives on business strategy and regulatory compliance.'
    },
    {
      id: 'anil-ghoghare',
      name: 'Mr. Anil Ghoghare',
      title: 'Additional Director',
      image: '/images/anil-ghoghare.jpg',
      highlights: [
        'PhD in Pharmaceutical Chemistry',
        'M.Tech from IIT Delhi',
        '37 years in pharmaceutical technology',
        'Expert in facility design and GMP compliance'
      ],
      bio: 'Mr. Ghoghare\'s extensive academic background and industry experience drive SPIL\'s technological excellence and regulatory compliance.'
    }
  ];

  const managementTeam = [
    {
      name: 'Mr. Nirav Shah',
      title: 'Company Secretary & Compliance Officer',
      expertise: 'Corporate and secretarial compliances'
    },
    {
      name: 'Mr. Indraraj Neogi',
      title: 'Head of Sales & Marketing of Pharma Division',
      expertise: 'Pharmaceutical marketing strategy'
    },
    {
      name: 'Mr. Santosh Thakur',
      title: 'Business Development Manager',
      expertise: 'Market expansion and partnerships'
    },
    {
      name: 'Mr. Shrinivas Patil',
      title: 'Export Head',
      expertise: 'International trade and logistics'
    },
    {
      name: 'Mr. Bhavesh Kankia',
      title: 'Supply Chain Purchase Head',
      expertise: 'Procurement and vendor management'
    },
    {
      name: 'Mrs. Shrishti Mayekar',
      title: 'Head of Sales & Marketing',
      expertise: 'Domestic market strategy'
    },
    {
      name: 'Ms. Geeta Ram Asare',
      title: 'Supply Chain Logistics Head',
      expertise: 'Distribution network optimization'
    },
    {
      name: 'Mr. Vinay Kumar Singh',
      title: 'Independent Head of Pharma business',
      expertise: 'Manufacturing and strategic marketing'
    },
    {
      name: 'Raju Gopalrai Sanghavi',
      title: 'Senior Accountant',
      expertise: 'Financial management and reporting'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Executive Leadership</h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Visionary leaders driving innovation and excellence in pharmaceuticals and specialty chemicals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders guiding our strategic vision and corporate governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 bg-gray-100">
                  {/* Placeholder for leader image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                      <p className="text-blue-200">{leader.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {leader.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setExpandedProfile(expandedProfile === leader.id ? null : leader.id)}
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <span>View Full Profile</span>
                    <motion.div
                      animate={{ rotate: expandedProfile === leader.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 ml-1" />
                    </motion.div>
                  </button>
                </div>

                <AnimatePresence>
                  {expandedProfile === leader.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6">
                        <h4 className="font-bold text-gray-900 mb-3">Professional Highlights</h4>
                        <ul className="space-y-2 mb-4">
                          {leader.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <Award className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-bold text-gray-900 mb-3">Biography</h4>
                        <p className="text-gray-600 mb-4">{leader.bio}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Management Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals executing our strategic vision across all business functions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.title}</p>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Values</h2>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The principles that guide our executive team's decision-making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: 'Industry Expertise',
                description: 'Deep domain knowledge across pharmaceuticals and chemicals'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Perspective',
                description: 'International experience and market understanding'
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: 'Continuous Learning',
                description: 'Commitment to professional development and education'
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Ethical Governance',
                description: 'Strong compliance and corporate governance framework'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-blue-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveLeadership;