// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-orange-500">मिलन</span>
                <span className="text-white">कुंभ</span>
              </h3>
            </Link>
            <p className="text-gray-400 mb-6">
              An initiative by Egniol Foundation to help locate missing people during Mahakumbh.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/report">Report Missing Person</FooterLink>
              <FooterLink href="/search">Search Missing Person</FooterLink>
              <FooterLink href="/emergency">Emergency Contacts</FooterLink>
              <FooterLink href="/resources">Important Resources</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>Toll Free: 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>help@milankumbh.org</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span>
                  Sector 4, Near Railway Station,
                  <br />
                  Prayagraj, Uttar Pradesh
                </span>
              </li>
            </ul>
          </div>

          {/* Emergency Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">24/7 Emergency Support</h4>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-orange-500 font-semibold mb-2">Emergency Numbers:</p>
              <ul className="space-y-2 text-gray-400">
                <li>Police Control: 100</li>
                <li>Ambulance: 108</li>
                <li>Helpline: 1800-XXX-XXXX</li>
                <li>Control Room: 0532-XXXXXXX</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © {new Date().getFullYear()} MilanKumbh - An initiative by Egniol Foundation. 
              All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Use</FooterLink>
              <FooterLink href="/disclaimer">Disclaimer</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
    hover:bg-orange-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link 
      href={href}
      className="hover:text-orange-500 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export default Footer;