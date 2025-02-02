"use client"
import React, { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import logo from '../../app/assets/EGNIOL FOUNDATION_LOGO-2-1.png'
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Emergency banner */}
      <div className="bg-orange-600 text-white py-1 px-4 text-center text-sm">
        <span className="flex items-center justify-center gap-2">
          <Phone size={16} /> Emergency Helpline: 1800-XXX-XXXX
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-600">मिलन</span>
              <span className="text-2xl font-bold text-gray-800">कुंभ</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/report-missing-person">Report Missing</NavLink>
            <NavLink href="/search-missing-person">Search</NavLink>
            <NavLink href="/emergency-contacts">Emergency</NavLink>
          </div>

          {/* Language and Mobile Menu */}
          <div className="flex items-center gap-4">
            <Image src={logo} alt="" className="w-auto h-16" />
            {/* <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 text-gray-600 hover:text-orange-600"
            >
              <Globe size={20} />
              <span className="hidden sm:inline">{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button> */}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-orange-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/report">Report Missing</MobileNavLink>
              <MobileNavLink href="/search">Search</MobileNavLink>
              <MobileNavLink href="/emergency">Emergency</MobileNavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-orange-600 font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-orange-600 font-medium transition-colors block px-4 py-2"
  >
    {children}
  </a>
);

export default Header;