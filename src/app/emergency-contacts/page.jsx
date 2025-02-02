import React from 'react';
import { Phone, MapPin, AlertCircle, HeartPulse, Shield, Headphones, Clock, Users, ExternalLink } from 'lucide-react';
import logo from '../assets/EGNIOL FOUNDATION_LOGO-2-1.png'
import Image from 'next/image';

const EmergencyContacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2">
            <AlertCircle className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">24/7 Emergency Helpline:</span>
            <a href="tel:1800XXXXXXX" className="font-bold hover:underline">1800-XXX-XXXX</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Branding Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center gap-4">
              {/* <img 
                src="/api/placeholder/100/100" 
                alt="MilanKumbh Logo" 
                className="h-16"
              />
              <span className="text-3xl font-bold text-gray-400">×</span> */}
              <Image
                src={logo}
                alt="Egniol Foundation Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-orange-800 mb-4">
            Emergency Support Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A joint initiative by MilanKumbh and Egniol Foundation to provide 24/7 emergency assistance 
            during Mahakumbh. Our trained team is ready to help you locate missing persons.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <QuickActionCard
            icon={<Phone className="w-8 h-8" />}
            title="Call Emergency Team"
            description="Get immediate assistance from our trained team"
            action="1800-XXX-XXXX"
            buttonText="Call Now"
            type="phone"
          />
          <QuickActionCard
            icon={<HeartPulse className="w-8 h-8" />}
            title="Medical Emergency"
            description="Contact medical support services"
            action="108"
            buttonText="Medical Help"
            type="phone"
          />
          <QuickActionCard
            icon={<Shield className="w-8 h-8" />}
            title="Police Support"
            description="Contact local police for assistance"
            action="100"
            buttonText="Police Help"
            type="phone"
          />
        </div>

        {/* Help Centers Map */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            Help Center Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LocationCard
              name="Sector 1 Center"
              address="Near Main Gate, Sangam Area"
              timings="24/7"
              phone="+91 522-XXXXXXX"
            />
            <LocationCard
              name="Sector 4 Center"
              address="Near Railway Station, Civil Lines"
              timings="24/7"
              phone="+91 522-XXXXXXX"
            />
            <LocationCard
              name="Sector 7 Center"
              address="Near Hospital, Daraganj"
              timings="24/7"
              phone="+91 522-XXXXXXX"
            />
          </div>
        </div>

        {/* Support Services */}
        <div className="bg-orange-50 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            Additional Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SupportCard
              icon={<Headphones className="w-6 h-6" />}
              title="24/7 Helpdesk"
              description="Our multilingual support team is available round the clock"
              contact="+91 522-XXXXXXX"
            />
            <SupportCard
              icon={<Users className="w-6 h-6" />}
              title="Volunteer Network"
              description="Connect with our trained volunteers for ground support"
              contact="+91 522-XXXXXXX"
            />
          </div>
        </div>

        {/* Foundation Info */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="/api/placeholder/400/300" 
                alt="Egniol Foundation" 
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">
                About Egniol Foundation
              </h2>
              <p className="text-gray-600 mb-4">
                Egniol Foundation is committed to serving society through various humanitarian 
                initiatives. The MilanKumbh project is developed and managed by Egniol Foundation 
                to help reunite families during Mahakumbh.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Learn More
                  <ExternalLink size={16} />
                </button>
                <button className="flex items-center gap-2 bg-white border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                  Contact Foundation
                  <Phone size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickActionCard = ({ icon, title, description, action, buttonText, type }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="text-orange-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={type === 'phone' ? `tel:${action}` : action}
      className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
    >
      {buttonText}
      {type === 'phone' && <Phone size={16} />}
    </a>
  </div>
);

const LocationCard = ({ name, address, timings, phone }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
    <div className="space-y-2 text-sm text-gray-600">
      <div className="flex items-start gap-2">
        <MapPin size={16} className="mt-1 flex-shrink-0" />
        <span>{address}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={16} />
        <span>{timings}</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone size={16} />
        <a href={`tel:${phone}`} className="hover:text-orange-600">
          {phone}
        </a>
      </div>
    </div>
  </div>
);

const SupportCard = ({ icon, title, description, contact }) => (
  <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
    <div className="text-orange-600">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <a href={`tel:${contact}`} className="text-orange-600 hover:underline">
        {contact}
      </a>
    </div>
  </div>
);

export default EmergencyContacts;