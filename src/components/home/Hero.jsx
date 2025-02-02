import React from 'react';
import { Search, Phone, Users, AlertCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full md:mt-8 mt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50">
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-20">
          {/* Hero text */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-800 mb-4">
              मिलन<span className="text-orange-600">कुंभ</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Reuniting Families at Mahakumbh
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your loved ones or help others reconnect. Together we can make a difference.
            </p>
          </div>

          {/* Search box */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Enter name, location, or other details..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <QuickActionCard
              icon={<AlertCircle className="text-orange-600" size={24} />}
              title="Report Missing"
              description="Submit details of a missing person"
            />
            <QuickActionCard
              icon={<Search className="text-orange-600" size={24} />}
              title="Search Missing"
              description="Browse through missing person reports"
            />
            <QuickActionCard
              icon={<Phone className="text-orange-600" size={24} />}
              title="Emergency Contact"
              description="Get immediate assistance"
            />
          </div>

          {/* Stats */}
          <div className="mt-12 bg-white/80 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <StatCard number="1,234" label="People Found" />
              <StatCard number="256" label="Active Cases" />
              <StatCard number="24/7" label="Support" />
              <StatCard number="100+" label="Volunteers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickActionCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="p-2">
    <div className="text-2xl font-bold text-orange-600">{number}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default Hero;