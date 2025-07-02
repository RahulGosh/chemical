import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Company Overview",
      dropdown: [{ name: "About Us", href: "/about" }, { name: "Executive leadership", href: "/executive-leadership" }],
    },
    {
      name: "Business",
      href: "/business-segments",
      dropdown: [
        { name: "Business Segments", href: "/business-segments" },
        {
          name: "Chemicals",
          dropdown: [
            { name: "Specialty Chemicals", href: "/product-range" },
            { name: "API Manufacturing", href: "/api-manufacturing" },
          ],
        },
        { name: "Manufacturing & Exports", href: "/manufacturing" },
      ],
    },
    { name: "Investor Relations", href: "/investor-relations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  // Recursive function to render dropdown menus
  const renderDropdown = (items: any[], level = 0) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-secondary-200 py-2 z-50 ${
          level > 0 ? "left-full ml-1 top-0" : ""
        }`}
      >
        {items.map((item) => (
          <div key={item.name} className="relative group">
            {item.dropdown ? (
              <div className="hover:bg-primary-50">
                <div className="flex items-center justify-between px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 transition-colors">
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="hidden group-hover:block">
                  {renderDropdown(item.dropdown, level + 1)}
                </div>
              </div>
            ) : (
              <Link
                to={item.href}
                className="block px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors rounded-lg mx-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-900 font-bold text-xl leading-tight">
                Sudarshan
              </span>
              <span className="text-secondary-600 text-xs leading-tight">
                Pharma Industries
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button className="flex items-center space-x-1 text-secondary-700 hover:text-primary-700 font-medium transition-colors py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen === item.name &&
                        renderDropdown(item.dropdown)}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-secondary-700 hover:text-primary-700 font-medium transition-colors py-2 ${
                      location.pathname === item.href ? "text-primary-700" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+911234567890"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>+91 123 456 7890</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-secondary-700 hover:text-primary-700 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-secondary-200 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setDropdownOpen(
                            dropdownOpen === item.name ? null : item.name
                          )
                        }
                        className="flex items-center justify-between w-full text-secondary-700 hover:text-primary-700 font-medium py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            dropdownOpen === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="ml-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <div key={subItem.name}>
                              {subItem.dropdown ? (
                                <>
                                  <button
                                    onClick={() =>
                                      setDropdownOpen(
                                        dropdownOpen === subItem.name
                                          ? null
                                          : subItem.name
                                      )
                                    }
                                    className="flex items-center justify-between w-full text-sm text-secondary-600 hover:text-primary-700 py-1"
                                  >
                                    <span>{subItem.name}</span>
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        dropdownOpen === subItem.name
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                  {dropdownOpen === subItem.name && (
                                    <div className="ml-4 space-y-1">
                                      {subItem.dropdown.map((subSubItem) => (
                                        <Link
                                          key={subSubItem.name}
                                          to={subSubItem.href}
                                          onClick={() => setIsOpen(false)}
                                          className="block text-xs text-secondary-600 hover:text-primary-700 py-1"
                                        >
                                          {subSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  to={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-sm text-secondary-600 hover:text-primary-700 py-1"
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-secondary-700 hover:text-primary-700 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>+91 123 456 7890</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;