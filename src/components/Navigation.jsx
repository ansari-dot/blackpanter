import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Project", path: "/project" },
  { label: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen 2xl:min-h-screen min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] xl:min-h-[1100px] 2xl:min-h-[1200px] overflow-hidden">
      {/* Background Vector */}
      <img
        className="absolute top-[101px] left-1/2 -translate-x-1/2 w-full max-w-[1270px] h-auto z-10 md:top-[101px] lg:top-[101px] xl:top-[101px] 2xl:top-[101px]"
        style={{ 
          top: window.innerWidth < 768 ? '-50px' : '101px'
        }}
        alt="Vector"
        src="https://c.animaapp.com/mj32vqleeMiOmR/img/vector-4.svg"
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
              <Link
                key={index}
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
                border: '3px solid #000000 !important',
                borderColor: '#000000 !important',
                borderWidth: '3px !important',
                borderStyle: 'solid !important',
                outline: '3px solid #000000'
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
    </div>
  );
};
