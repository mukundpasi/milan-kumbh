import React from 'react';
import { Phone, MapPin, AlertCircle, FileText, HelpCircle, Users } from 'lucide-react';

const EmergencyResources = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Contacts */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              Emergency Contacts
            </h2>
            <p className="text-gray-600">
              24/7 support available for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EmergencyCard
              icon={<Phone className="w-8 h-8" />}
              title="Helpline Numbers"
              items={[
                { label: "MilanKumbh Helpline", value: "1800-XXX-XXXX" },
                { label: "Police Control Room", value: "100" },
                { label: "Medical Emergency", value: "108" }
              ]}
            />
            <EmergencyCard
              icon={<MapPin className="w-8 h-8" />}
              title="Help Centers"
              items={[
                { label: "Sector 1 Center", value: "Near Main Gate" },
                { label: "Sector 4 Center", value: "Near Railway Station" },
                { label: "Sector 7 Center", value: "Near Hospital" }
              ]}
            />
            <EmergencyCard
              icon={<Users className="w-8 h-8" />}
              title="Local Authorities"
              items={[
                { label: "Police Station", value: "0532-XXXXXXX" },
                { label: "Control Room", value: "0532-XXXXXXX" },
                { label: "Municipal Office", value: "0532-XXXXXXX" }
              ]}
            />
          </div>
        </div>

        {/* Important Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            Important Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              icon={<AlertCircle className="w-6 h-6 text-orange-600" />}
              title="Safety Guidelines"
              description="Essential safety tips and precautions for Mahakumbh attendees"
              buttonText="View Guidelines"
            />
            <ResourceCard
              icon={<MapPin className="w-6 h-6 text-orange-600" />}
              title="Event Map"
              description="Detailed map of Mahakumbh with important locations marked"
              buttonText="Open Map"
            />
            <ResourceCard
              icon={<FileText className="w-6 h-6 text-orange-600" />}
              title="Documents Guide"
              description="List of important documents to carry during the event"
              buttonText="Learn More"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <FaqItem
              question="What should I do if I can't find someone?"
              answer="Immediately report to the nearest help center or police station. Also, file a report on MilanKumbh website with all available details and recent photographs."
            />
            <FaqItem
              question="How long does it take to process a missing person report?"
              answer="Reports are processed immediately upon submission. Our volunteer network and local authorities are notified within minutes of submission."
            />
            <FaqItem
              question="What information do I need to file a report?"
              answer="You'll need the person's name, age, photo, last seen location, and your contact details. Additional information like clothing and distinctive features is helpful."
            />
          </div>
        </div>

        {/* Quick Action Banner */}
        <div className="mt-16 bg-orange-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="mb-6">Our support team is available 24/7 to help you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Call Helpline
            </button>
            <button className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors">
              Chat with Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyCard = ({ icon, title, items }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center gap-3 mb-4 text-orange-600">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="text-gray-600">{item.label}</span>
          <span className="font-semibold">{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ResourceCard = ({ icon, title, description, buttonText }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <button className="w-full bg-orange-100 text-orange-600 py-2 rounded hover:bg-orange-200 transition-colors">
      {buttonText}
    </button>
  </div>
);

const FaqItem = ({ question, answer }) => (
  <div className="border-b border-gray-200 pb-4">
    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
      <HelpCircle size={20} className="text-orange-600" />
      {question}
    </h4>
    <p className="text-gray-600 pl-7">{answer}</p>
  </div>
);

export default EmergencyResources;