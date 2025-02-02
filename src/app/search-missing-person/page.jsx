"use client";
import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, User, X, Phone } from 'lucide-react';

// Alert Component
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

const SearchMissingPerson = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    ageRange: '',
    gender: '',
    lastSeenDate: '',
    location: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data generator
  const generateDummyData = (count) => {
    const locations = [
      'Sector 1, Prayagraj',
      'Sangam Area',
      'Civil Lines',
      'Jhunsi',
      'Daraganj'
    ];
    const names = [
      'Rahul Kumar',
      'Priya Sharma',
      'Amit Patel',
      'Sneha Gupta',
      'Raj Verma'
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: `MP${i + 1}`,
      name: names[Math.floor(Math.random() * names.length)],
      age: Math.floor(Math.random() * 50) + 15,
      gender: Math.random() > 0.5 ? 'Male' : 'Female',
      lastSeen: new Date(Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      location: locations[Math.floor(Math.random() * locations.length)],
      image: `/api/placeholder/300/300`,
      status: Math.random() > 0.8 ? 'found' : 'missing',
      description: 'Last seen wearing blue shirt and black pants.',
      contactNumber: '+91 98765-43210',
      reportedBy: 'Family Member'
    }));
  };

  // Dummy API call
  const fetchSearchResults = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(generateDummyData(12));
      }, 1000);
    });
  };

  // Filter data based on search query and filters
  const filterData = (data) => {
    return data.filter(person => {
      const matchesSearch =
        !searchQuery ||
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesAge =
        !filters.ageRange ||
        (filters.ageRange === '0-18' && person.age <= 18) ||
        (filters.ageRange === '19-40' && person.age > 18 && person.age <= 40) ||
        (filters.ageRange === '41+' && person.age > 40);

      const matchesGender =
        !filters.gender ||
        person.gender.toLowerCase() === filters.gender.toLowerCase();

      const matchesDate = !filters.lastSeenDate || person.lastSeen === filters.lastSeenDate;

      const matchesLocation =
        !filters.location ||
        person.location.toLowerCase().includes(filters.location.toLowerCase());

      return matchesSearch && matchesAge && matchesGender && matchesDate && matchesLocation;
    });
  };

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchSearchResults();
        setSearchResults(data);
      } catch (err) {
        setError('Failed to load search results');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchSearchResults();
      setSearchResults(filterData(data));
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      ageRange: '',
      gender: '',
      lastSeenDate: '',
      location: ''
    });
    setSearchQuery('');
  };

  const filteredResults = filterData(searchResults);

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-2 text-center">
            Search Missing Persons
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto">
            Use the search and filters to find specific missing person reports.
          </p>
        </div>

        {error && (
          <Alert type="error" onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {/* Search Bar */}
        <div className="mb-4 sm:mb-6">
          <div className="max-w-xl mx-auto">
            <div className="flex gap-3 items-center">
              <div className="flex-grow relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, location, etc..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-white border border-gray-300 px-3 py-3 rounded-lg flex items-center gap-1 hover:bg-gray-50"
              >
                <Filter size={18} />
                <span className="hidden sm:inline text-sm">Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {isFilterOpen && (
          <div className="mb-6 max-w-xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800 text-lg">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-orange-600 text-sm hover:text-orange-700 mt-2 sm:mt-0"
              >
                Clear all filters
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age Range</label>
                <select
                  name="ageRange"
                  value={filters.ageRange}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Ages</option>
                  <option value="0-18">0-18 years</option>
                  <option value="19-40">19-40 years</option>
                  <option value="41+">41+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  value={filters.gender}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Seen Date</label>
                <input
                  type="date"
                  name="lastSeenDate"
                  value={filters.lastSeenDate}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder="Enter location"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSearch}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* View Toggle and Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="text-gray-600 mb-2 sm:mb-0">
            Showing {filteredResults.length} result{filteredResults.length !== 1 && 's'}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded border ${
                viewMode === 'grid'
                  ? 'bg-orange-100 text-orange-600 border-orange-600'
                  : 'bg-white text-gray-600 border-gray-300'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded border ${
                viewMode === 'list'
                  ? 'bg-orange-100 text-orange-600 border-orange-600'
                  : 'bg-white text-gray-600 border-gray-300'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-orange-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Loading results...</p>
          </div>
        )}

        {/* Results Grid/List */}
        {!loading && (
          <div
            className={`grid ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid-cols-1 gap-4'
            }`}
          >
            {filteredResults.map((person) => (
              <PersonCard key={person.id} person={person} viewMode={viewMode} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredResults.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">
              No results found. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Load More */}
        {!loading && filteredResults.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleSearch}
              className="bg-white border border-orange-600 text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-50 transition-colors"
            >
              Load More Results
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const PersonCard = ({ person, viewMode }) => {
  const daysAgo = Math.floor(
    (new Date() - new Date(person.lastSeen)) / (1000 * 60 * 60 * 24)
  );

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-48 flex-shrink-0">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="flex-grow p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
              <span
                className={`mt-2 sm:mt-0 inline-block px-2 py-1 rounded text-sm ${
                  person.status === 'missing'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                {person.status === 'missing' ? 'Missing' : 'Found'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>
                    {person.age} years old • {person.gender}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{person.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    Last seen {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>{person.description}</p>
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{person.contactNumber}</span>
                </p>
                <p>Reported by: {person.reportedBy}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row justify-end gap-2">
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                Share
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view card
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 right-2 px-2 py-1 rounded text-sm ${
            person.status === 'missing'
              ? 'bg-red-100 text-red-600'
              : 'bg-green-100 text-green-600'
          }`}
        >
          {person.status === 'missing' ? 'Missing' : 'Found'}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{person.name}</h3>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span>
              {person.age} years old • {person.gender}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{person.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>
              Last seen {daysAgo} {daysAgo === 1 ? 'day' : 'days'} ago
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>{person.contactNumber}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
            Share
          </button>
          <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchMissingPerson;
