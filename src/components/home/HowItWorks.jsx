import React from 'react';
import { ClipboardList, Search, Bell, Users, Phone, Check } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
            How MilanKumbh Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple steps to help find missing people at Mahakumbh. Everyone can contribute to reuniting families.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ProcessCard
            icon={<ClipboardList className="w-12 h-12 text-orange-600" />}
            step="1"
            title="Report Missing Person"
            description="Fill out a simple form with details and photos of the missing person. Include last seen location and contact information."
          />
          <ProcessCard
            icon={<Search className="w-12 h-12 text-orange-600" />}
            step="2"
            title="Search Database"
            description="Browse through our database of reported missing persons. Use filters to narrow down your search."
          />
          <ProcessCard
            icon={<Bell className="w-12 h-12 text-orange-600" />}
            step="3"
            title="Get Updates"
            description="Receive notifications when someone matches your search criteria or when your report gets any updates."
          />
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-orange-800 mb-8 text-center">
            Additional Support Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Users className="w-8 h-8 text-orange-600" />}
              title="Volunteer Network"
              description="Join our network of volunteers helping to locate missing persons"
            />
            <FeatureCard
              icon={<Phone className="w-8 h-8 text-orange-600" />}
              title="24/7 Helpline"
              description="Access to emergency support and guidance at any time"
            />
            <FeatureCard
              icon={<Check className="w-8 h-8 text-orange-600" />}
              title="Verified Information"
              description="All reports are verified to ensure accuracy and reliability"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Report Missing Person
            </button>
            <button className="bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Search Missing Persons
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessCard = ({ icon, step, title, description }) => (
  <div className="relative bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="absolute -top-4 left-6 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
      {step}
    </div>
    <div className="mt-4 mb-4 flex justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
      {title}
    </h3>
    <p className="text-gray-600 text-center">
      {description}
    </p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default HowItWorks;