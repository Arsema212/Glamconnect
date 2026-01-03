import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon, PlusIcon } from '@heroicons/react/24/outline';
import Header from '../../components/layout/Header';

const SelectServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const categories = [
    'BLOW DRY/HAIR STRAIGHTENING',
    'KIDS',
    'BRAIDS',
    'HAIR CUT',
    'COLOR',
    'BRIDAL',
  ];

  const services = [
    { id: 1, name: 'BRAZILLIAN BUSSDOWN', duration: '2hr - 4:00', price: 'from 2000 birr' },
    { id: 2, name: 'SILK PRESS', duration: '2hr - 3hr', price: 'from 1000 birr' },
    { id: 3, name: 'BEACHY WAVES', duration: '2hr - 3:00hr', price: 'from 850 birr' },
    { id: 4, name: 'HOLLYWOOD BLOWOUT', duration: '3hr - 3:30hr', price: 'from 850 birr' },
  ];

  const salonInfo = {
    name: 'PRINCESS TREATMENT',
    rating: 4.5,
    reviews: 100,
    location: 'Bole Rwanda Embassay, 5m from WOW Burger',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
  };

  const handleContinue = () => {
    if (selectedService) {
      navigate('/booking/professionals', { state: { service: selectedService } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Panel - Service Selection */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/salon/1" className="text-gray-600 hover:text-gray-900">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
              <div className="flex gap-2 text-sm text-gray-600">
                <span className="font-medium text-black">Services</span>
                <span>/</span>
                <span>Professionals</span>
                <span>/</span>
                <span>Schedule</span>
                <span>/</span>
                <span>Confirm</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Select Services</h1>

            {/* Categories */}
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

            <p className="text-gray-600 mb-6">
              get an amazing blow dry with our professional stylist in the addis
            </p>

            {/* Service List */}
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 bg-white rounded-xl border-2 transition-all cursor-pointer ${
                    selectedService?.id === service.id
                      ? 'border-blue-500'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{service.duration}</p>
                      <p className="text-sm text-gray-600">{service.price}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                      {selectedService?.id === service.id ? (
                        <CheckIcon className="w-6 h-6 text-blue-500" />
                      ) : (
                        <PlusIcon className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Booking Summary */}
          <div className="w-96">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex gap-4 mb-4">
                <img
                  src={salonInfo.image}
                  alt={salonInfo.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{salonInfo.name}</h3>
                  <div className="flex items-center gap-1 mb-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{salonInfo.rating} ({salonInfo.reviews})</span>
                  </div>
                  <p className="text-xs text-gray-600">{salonInfo.location}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                {selectedService && (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{selectedService.name}</p>
                      <p className="text-sm text-gray-600">2:30 hr</p>
                      <p className="text-sm text-gray-600">No chosen professional</p>
                    </div>
                    <p className="font-medium text-gray-900">2,300.00 Birr</p>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">2,300.00 Birr</span>
                </div>
              </div>

              <button
                onClick={handleContinue}
                disabled={!selectedService}
                className="w-full mt-6 bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectServices;

