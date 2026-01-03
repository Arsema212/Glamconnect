import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

const SalonDetail = () => {
  const salon = {
    id: 1,
    name: 'PRINCESS TREATMENT',
    rating: 4.5,
    reviews: 100,
    status: 'Closed',
    opensAt: 'Monday 2:00 AM',
    location: 'Bole Medhaniyalm, mazoriya, 2800.',
    images: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    ],
  };

  const services = [
    { id: 1, name: 'CUT', duration: '1hr - 1:30', price: 'from 300 birr' },
    { id: 2, name: 'BRAIDS', duration: '1hr - 4hr', price: 'from 700 birr' },
  ];

  const categories = [
    'BLOW DRY/HAIR STRAIGHTENING',
    'KIDS',
    'BRAIDS',
    'HAIR CUT',
    'COLOR',
    'BRIDAL',
  ];

  const team = [
    { id: 1, name: 'ETSUBDINK', role: 'Branch Mn.', rating: 5.0, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
    { id: 2, name: 'ABENET', role: 'Hair Stylist', rating: 5.0, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { id: 3, name: 'HEWAN', role: 'Nail Tech', rating: 5.0, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
    { id: 4, name: 'MESERET', role: '', rating: 5.0, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200' },
    { id: 5, name: 'ALEX', role: 'Branch Mn.', rating: 5.0, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { id: 6, name: 'HABTAMU', role: '', rating: 5.0, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200' },
    { id: 7, name: 'HEWAN', role: 'Hair Stylist', rating: 5.0, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
    { id: 8, name: 'ETSEHIWOT', role: 'Makeup Artist', rating: 5.0, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200' },
  ];

  const reviews = [
    { id: 1, name: 'Darik', date: 'Mon, Dec 24, 2025 at 5:00 pm', rating: 5, comment: 'I had a great time! Definitely visiting again.' },
    { id: 2, name: 'Kebrom', date: 'Mon, Dec 24, 2025 at 5:00 pm', rating: 5, comment: 'Great service! Coming back again' },
    { id: 3, name: 'Ayantu', date: 'Tues, Feb 24, 2025 at 3:00 pm', rating: 5, comment: 'Great service! Coming back again' },
    { id: 4, name: 'Fenan', date: 'Tues, Feb 24, 2025 at 3:00 pm', rating: 5, comment: 'I had a great time! Definitely visiting again.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <Header showSearch={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Main Content */}
          <div className="flex-1">
            {/* Salon Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{salon.name}</h1>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium text-gray-900">{salon.rating} ({salon.reviews})</span>
                </div>
                <span className="text-red-600 font-medium">{salon.status}</span>
                <span className="text-gray-600">opens on {salon.opensAt}</span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="col-span-2">
                <img
                  src={salon.images[0]}
                  alt={salon.name}
                  className="w-full h-96 rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4">
                <img
                  src={salon.images[1]}
                  alt={salon.name}
                  className="w-full h-46 rounded-xl object-cover"
                />
                <img
                  src={salon.images[2]}
                  alt={salon.name}
                  className="w-full h-46 rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full whitespace-nowrap font-medium text-sm ${
                      index === 0
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-700 border border-gray-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm"
                  >
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.duration}</p>
                      <p className="text-sm text-gray-600">{service.price}</p>
                    </div>
                    <Link
                      to="/booking/services"
                      className="px-6 py-2 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Book
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Team</h2>
              <div className="grid grid-cols-4 gap-6">
                {team.map((member) => (
                  <div key={member.id} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                    />
                    <p className="font-medium text-gray-900">{member.name}</p>
                    {member.role && <p className="text-sm text-gray-600">{member.role}</p>}
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <span className="text-xs font-medium">{member.rating}</span>
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-gray-600 hover:text-gray-900 font-medium">
                See all
              </button>
            </div>

            {/* Reviews Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">{salon.rating} ({salon.reviews})</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-700 font-medium">{review.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Panel */}
          <div className="w-80">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{salon.name}</h3>
              <div className="flex items-center gap-1 mb-4">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">{salon.rating} ({salon.reviews})</span>
              </div>
              <Link
                to="/booking/services"
                className="w-full bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity block text-center mb-4"
              >
                Book
              </Link>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <CalendarIcon className="w-5 h-5" />
                <span className="text-sm">Open until 8:00 Pm</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-sm">{salon.location}</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Get Direction
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetail;

