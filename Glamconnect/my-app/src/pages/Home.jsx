import { useState } from 'react';
import Header from '../components/layout/Header';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const recommendedSalons = [
    {
      id: 1,
      name: 'Princess Treatment',
      location: 'Bole Medhanialm',
      rating: 4.5,
      reviews: 100,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
    },
    {
      id: 2,
      name: 'Meti Hair Salon and Spa',
      location: 'Gerji Mebrathaile',
      rating: 5.0,
      reviews: 130,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    },
    {
      id: 3,
      name: 'Dagim Spa treatment',
      location: 'Bole bulbula',
      rating: 4.3,
      reviews: 55,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    },
    {
      id: 4,
      name: 'Boston Day Spa',
      location: 'Bole rawanda',
      rating: 5.0,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    },
    {
      id: 5,
      name: 'Betty Makeup Studio',
      location: 'Bethel Mehandis',
      rating: 4.9,
      reviews: 97,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400',
    },
    {
      id: 6,
      name: "Tsion's Spa & Massage",
      location: 'Addisu Gebeya',
      rating: 5.0,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
    },
    {
      id: 7,
      name: 'Osmera nail world',
      location: 'Gofa Mebrat Haile',
      rating: 4.1,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
    },
    {
      id: 8,
      name: 'RYH home beauty',
      location: 'Jemo, furi',
      rating: 5.0,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    },
  ];

  const searchResults = [
    { name: 'Princess Treatment', location: 'Bole, Rwanda' },
    { name: 'Dagi Hair Salon', location: 'Kazanchis, temtem' },
    { name: 'Betty makeup studio', location: '4 kilo, saint mary' },
    { name: 'Osmera nail world', location: 'Bole, Rwanda' },
    { name: 'RYH all in one', location: 'Bole, Rwanda' },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book your favorite beauty and wellness services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover top-rated salons, nail techs, wellness services, and all beauty service providers near you
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(e.target.value.length > 0);
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg"
                />
              </div>
              <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>

            {showSearchDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>Salon</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-gray-900">{result.name}</p>
                        <p className="text-sm text-gray-500">{result.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recommended</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedSalons.map((salon) => (
              <Link
                key={salon.id}
                to={`/salon/${salon.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={salon.image}
                    alt={salon.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{salon.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{salon.location}</p>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">
                      {salon.rating} ({salon.reviews})
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

