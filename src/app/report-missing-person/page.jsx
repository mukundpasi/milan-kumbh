"use client";
import React, { useState } from 'react';
import { Camera, MapPin, Phone, AlertCircle, X } from 'lucide-react';

// Simple Alert Component
const Alert = ({ type, children, onClose }) => {
  const styles = {
    success: 'bg-green-50 border-green-500 text-green-800',
    error: 'bg-red-50 border-red-500 text-red-800',
    warning: 'bg-orange-50 border-orange-500 text-orange-800'
  };

  return (
    <div className={`flex items-center p-4 mb-4 border-l-4 rounded-lg ${styles[type]}`}>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button onClick={onClose} className="ml-auto">
          <X size={16} />
        </button>
      )}
    </div>
  );
};

const ReportMissingPerson = () => {
  const [formData, setFormData] = useState({
    missingPersonName: '',
    age: '',
    gender: '',
    dateLastSeen: '',
    locationLastSeen: '',
    description: '',
    reporterName: '',
    contactNumber: '',
    relation: ''
  });

  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      setSubmitStatus({
        type: 'error',
        message: 'Maximum 5 photos allowed'
      });
      return;
    }
    setPhotos(files);
  };

  // Dummy API call
  const submitReport = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, reportId: 'MP' + Math.random().toString(36).substr(2, 9) });
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const formDataWithPhotos = new FormData();
      Object.keys(formData).forEach(key => {
        formDataWithPhotos.append(key, formData[key]);
      });
      photos.forEach(photo => {
        formDataWithPhotos.append('photos', photo);
      });

      const response = await submitReport(formDataWithPhotos);
      
      if (response.success) {
        setSubmitStatus({
          type: 'success',
          message: `Report submitted successfully! Report ID: ${response.reportId}`
        });
        setFormData({
          missingPersonName: '',
          age: '',
          gender: '',
          dateLastSeen: '',
          locationLastSeen: '',
          description: '',
          reporterName: '',
          contactNumber: '',
          relation: ''
        });
        setPhotos([]);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error submitting report. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-orange-50 mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Report Missing Person</h2>
          <p className="text-gray-600">Please provide accurate information to help locate the person</p>
        </div>

        {submitStatus.message && (
          <Alert 
            type={submitStatus.type} 
            onClose={() => setSubmitStatus({ type: '', message: '' })}
          >
            {submitStatus.message}
          </Alert>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Person's Name *</label>
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

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Location Last Seen *</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="locationLastSeen"
                value={formData.locationLastSeen}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter specific location details"
                required
              />
              <button
                type="button"
                className="bg-orange-100 p-2 rounded-lg text-orange-600 hover:bg-orange-200"
                title="Use current location"
              >
                <MapPin size={24} />
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              rows="3"
              placeholder="Height, build, clothing worn, distinctive features, etc."
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Camera size={40} className="text-gray-400 mb-2" />
                <span className="text-gray-600">Click to upload photos</span>
                <span className="text-gray-400 text-sm mt-1">
                  Upload clear, recent photos (Max 5)
                </span>
              </label>
              {photos.length > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  {photos.length} {photos.length === 1 ? 'photo' : 'photos'} selected
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              <div className="flex gap-2">
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  className="bg-orange-100 p-2 rounded-lg text-orange-600 hover:bg-orange-200"
                  title="Verify phone number"
                >
                  <Phone size={24} />
                </button>
              </div>
            </div>

            <div className="md:col-span-2">
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

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-6 text-center text-gray-600">
          <p>Need assistance? Our support team is available 24/7</p>
          <p className="font-semibold">Call: 1800-XXX-XXXX</p>
        </div>
      </div>
    </section>
  );
};

export default ReportMissingPerson;