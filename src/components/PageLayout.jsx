import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaBatteryFull, FaBolt, FaTools, FaRecycle, FaWrench, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdBuild } from "react-icons/md";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Contact", path: "/contact" },
];

const servicesDropdownItems = [
  { label: "Battery Maintenance Services", Icon: FaBatteryFull },
  { label: "Electrical Conditioning & Testing", Icon: FaBolt },
  { label: "Major Battery Work", Icon: FaWrench },
  { label: "Battery Recycling & Refurbishment", Icon: FaRecycle },
  { label: "Equipment We Use", Icon: MdBuild },
];

export const PageLayout = ({ children, heroContent, backgroundImage, vectorBackground, backgroundSlider }) => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle slider functionality
  useEffect(() => {
    if (backgroundSlider && backgroundSlider.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundSlider.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [backgroundSlider]);

  // Determine which background to use
  const currentBackground = backgroundSlider ? backgroundSlider[currentSlide] : vectorBackground;

  return (
    <div className="bg-[#f4f5f7] w-full overflow-x-hidden">
      {/* Hero Section with Background */}
      <div className="relative w-full h-[120vh] md:h-[120vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh] min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1000px] overflow-hidden">
        {/* Background Image Layer (behind vector) */}
        {backgroundImage && (
          <div className="absolute inset-0 w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              alt="Background"
              src={backgroundImage}
            />
          </div>
        )}
        
        {/* Background Vector */}
        <img
          className="absolute top-[101px] left-1/2 -translate-x-1/2 w-full h-full object-cover z-10 md:top-[101px] lg:top-[101px] xl:top-[101px] 2xl:top-[101px]"
          style={{ 
            top: window.innerWidth < 768 ? '-50px' : '101px'
          }}
          alt="Vector"
          src={currentBackground}
        />

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Mobile Logo */}
            <img
              className="w-[60px] h-[60px] object-contain"
              alt="Black Panther Batteries Logo"
              src="https://c.animaapp.com/mj32vqleeMiOmR/img/image-9-1.png"
            />

            {/* Mobile Menu Button */}
            <button 
              className="flex items-center justify-center w-10 h-10 text-[#F06123]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Logo */}
        <img
          className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[129px] h-[129px] object-contain"
          alt="Black Panther Batteries Logo"
          src="https://c.animaapp.com/mj32vqleeMiOmR/img/image-9-1.png"
        />

        {/* Navigation */}
        <nav className="relative w-full max-w-[1200px] mx-auto px-4 md:px-8 pt-32 z-50">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Navigation Items - Desktop */}
            <div className="flex items-center gap-6 md:gap-[39.75px]">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className={`transition-all duration-300 p-0 m-0 flex items-center gap-1 ${
                          location.pathname === item.path 
                            ? 'opacity-100 font-extrabold' 
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <span 
                          className="font-bold text-[15.1px] whitespace-nowrap text-[#F06123]"
                          style={{ 
                            fontFamily: 'DM_Sans, Helvetica',
                            color: '#F06123'
                          }}
                        >
                          {item.label}
                        </span>
                        <IoIosArrowDown className="text-[#F06123] text-xs" />
                      </Link>
                      
                      {/* Services Dropdown - Desktop */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-[100]">
                          {servicesDropdownItems.map((service, idx) => {
                            const IconComponent = service.Icon;
                            return (
                              <Link
                                key={idx}
                                to="/service-detail"
                                className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors duration-200 group"
                              >
                                <IconComponent className="text-lg text-gray-500 group-hover:text-[#F06123] transition-colors duration-200 flex-shrink-0" />
                                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
                                  {service.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`transition-all duration-300 p-0 m-0 ${
                        location.pathname === item.path 
                          ? 'opacity-100 font-extrabold' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <span 
                        className="font-bold text-[15.1px] whitespace-nowrap text-[#F06123]"
                        style={{ 
                          fontFamily: 'DM_Sans, Helvetica',
                          color: '#F06123'
                        }}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side: Social Icons + Button - Desktop */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F06123] flex items-center justify-center hover:bg-[#FF8803] transition-all duration-300"
                >
                  <FaFacebookF className="text-white text-sm" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F06123] flex items-center justify-center hover:bg-[#FF8803] transition-all duration-300"
                >
                  <FaLinkedinIn className="text-white text-sm" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F06123] flex items-center justify-center hover:bg-[#FF8803] transition-all duration-300"
                >
                  <FaInstagram className="text-white text-sm" />
                </a>
              </div>

              <button 
                className="quote-button w-[140px] md:w-[157px] h-[43px] text-white font-bold text-[14px] md:text-[16px] rounded-[30px] transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: '#F06123',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FF8803';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#F06123';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Modern Slide-in */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-in Menu */}
            <div className="md:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out">
              {/* Menu Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                <span className="text-lg font-bold text-gray-800">Menu</span>
                <button 
                  className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-4">
                {navigationItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-50">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span 
                            className="font-semibold text-[16px] text-gray-800"
                            style={{ 
                              fontFamily: 'DM_Sans, Helvetica'
                            }}
                          >
                            {item.label}
                          </span>
                          <IoIosArrowDown className={`text-gray-500 text-sm transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Services Dropdown - Mobile */}
                        {isServicesOpen && (
                          <div className="bg-gray-50">
                            {servicesDropdownItems.map((service, idx) => {
                              const IconComponent = service.Icon;
                              return (
                                <Link
                                  key={idx}
                                  to="/service-detail"
                                  className="flex items-center gap-4 px-10 py-4 hover:bg-gray-100 transition-colors duration-200 group"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <IconComponent className="text-xl text-gray-500 group-hover:text-[#F06123] transition-colors duration-200 flex-shrink-0" />
                                  <div>
                                    <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 leading-relaxed block">
                                      {service.label}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-6 py-4 transition-all duration-200 ${
                          location.pathname === item.path 
                            ? 'bg-[#F06123]/10 border-l-4 border-[#F06123]' 
                            : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span 
                          className="font-semibold text-[16px] text-gray-800"
                          style={{ 
                            fontFamily: 'DM_Sans, Helvetica'
                          }}
                        >
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F06123] flex items-center justify-center hover:bg-[#FF8803] transition-all duration-300 shadow-md"
                  >
                    <FaFacebookF className="text-white text-sm" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F06123] flex items-center justify-center hover:bg-[#FF8803] transition-all duration-300 shadow-md"
                  >
                    <FaLinkedinIn className="text-white text-sm" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F06123] flex items-center justify-center hover:bg-[#FF8803] transition-all duration-300 shadow-md"
                  >
                    <FaInstagram className="text-white text-sm" />
                  </a>
                </div>
                
                <button 
                  className="w-full h-[48px] text-white font-bold text-[16px] rounded-[8px] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: '#F06123'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#FF8803';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#F06123';
                  }}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </>
        )}

        {/* Hero Section Content */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-4 md:px-8 pt-12 pb-32 flex items-start h-full">
          {heroContent}
        </div>
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
};
