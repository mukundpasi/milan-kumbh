"use client";
import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, User, ChevronDown } from 'lucide-react';

const SearchSection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample data - replace with actual data
  const sampleData = [
    {
      id: 1,
      name: "Rahul Kumar",
      age: 35,
      lastSeen: "2024-02-01",
      location: "Sector 4, Prayagraj",
      image: "/api/placeholder/150/150",
      status: "active",
      daysAgo: 2
    },
    // Add more sample data here
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center">
            Search Missing Persons
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Use the search and filters to find specific missing person reports
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4 items-center">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search by name, location, or other details..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-white border border-gray-300 px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-50"
              >
                <Filter size={20} />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {isFilterOpen && (
          <div className="mb-8 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>All Ages</option>
                  <option>0-18 years</option>
                  <option>19-40 years</option>
                  <option>41+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>All</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Seen Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* View Toggle and Stats */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            Showing {sampleData.length} results
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'bg-white'}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'bg-white'}`}
            >
              List
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {sampleData.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="bg-white border border-orange-600 text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors">
            Load More Results
          </button>
        </div>
      </div>
    </section>
  );
};

const PersonCard = ({ person, viewMode }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow
      ${viewMode === 'list' ? 'flex items-center' : ''}`}>
      <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'w-full'}`}>
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
          <span className={`px-2 py-1 rounded text-sm ${
            person.status === 'active' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
          }`}>
            {person.status === 'active' ? 'Missing' : 'Found'}
          </span>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>{person.age} years old</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{person.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>Last seen {person.daysAgo} days ago</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SearchSection;