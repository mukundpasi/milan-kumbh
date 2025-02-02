"use client";
import React, { useState } from 'react';
import { Camera, MapPin, Info, Phone, Calendar } from 'lucide-react';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    missingPersonName: '',
    age: '',
    gender: '',
    dateLastSeen: '',
    locationLastSeen: '',
    description: '',
    reporterName: '',
    contactNumber: '',
    relation: '',
    additionalInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-12 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            Report Missing Person
          </h2>
          <p className="text-gray-600">
            Please provide as much information as possible to help locate the missing person
          </p>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Missing Person Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Info size={20} className="text-orange-600" />
              Missing Person Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="missingPersonName"
                  value={formData.missingPersonName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Date Last Seen *</label>
                <input
                  type="date"
                  name="dateLastSeen"
                  value={formData.dateLastSeen}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Location and Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-orange-600" />
              Location & Description
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Last Seen Location *</label>
                <input
                  type="text"
                  name="locationLastSeen"
                  value={formData.locationLastSeen}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  placeholder="Enter specific location details"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Physical Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  rows="4"
                  placeholder="Height, build, clothing worn, distinctive features, etc."
                />
              </div>
            </div>
          </div>

          {/* Photo Upload */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Camera size={20} className="text-orange-600" />
              Photo Upload
            </h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="photo-upload"
                multiple
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Camera size={40} className="text-gray-400 mb-2" />
                <span className="text-gray-600">Click to upload photos</span>
                <span className="text-gray-400 text-sm mt-1">
                  Upload clear, recent photos (Max 5 photos)
                </span>
              </label>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Phone size={20} className="text-orange-600" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="reporterName"
                  value={formData.reporterName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Contact Number *</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Relation to Missing Person *</label>
                <input
                  type="text"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-8">
            <label className="block text-gray-700 mb-2">Additional Information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              rows="4"
              placeholder="Any other relevant information that might help in the search"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 text-center text-gray-600">
          <p>Need help? Call our 24/7 helpline: <span className="font-semibold">1800-XXX-XXXX</span></p>
        </div>
      </div>
    </section>
  );
};

export default ReportForm;