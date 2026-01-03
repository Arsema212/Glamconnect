import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Header from '../../components/layout/Header';

const SelectProfessionals = () => {
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [viewingProfessional, setViewingProfessional] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state?.service;

  const professionals = [
    { id: 'any', name: 'ANY PROFESSIONAL', description: 'for maxmimum availability', rating: null },
    { id: 1, name: 'ETSUBDINK', role: 'Senior Stylist', rating: 5.0, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
    { id: 2, name: 'ETSUBDINK', role: 'Senior Stylist', rating: 5.0, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
    { id: 3, name: 'ETSUBDINK', role: 'Senior Stylist', rating: 5.0, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  ];

  const salonInfo = {
    name: 'PRINCESS TREATMENT',
    rating: 4.5,
    reviews: 100,
    location: 'Bole Rwanda Embassay, 5m from WOW Burger',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
  };

  const handleViewProfile = (professional) => {
    setViewingProfessional(professional);
    setShowProfileModal(true);
  };

  const handleContinue = () => {
    navigate('/booking/schedule', { state: { service, professional: selectedProfessional } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Panel - Professional Selection */}
          <div className="flex-1">
            <div className="flex gap-2 text-sm text-gray-600 mb-6">
              <span>Services</span>
              <span>/</span>
              <span className="font-medium text-black">Professionals</span>
              <span>/</span>
              <span>Schedule</span>
              <span>/</span>
              <span>Confirm</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-8">Select professionals</h1>

            <div className="space-y-4">
              {professionals.map((professional) => (
                <div
                  key={professional.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-6">
                    {professional.id === 'any' ? (
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                    ) : (
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}

                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900">{professional.name}</h3>
                      {professional.role && (
                        <p className="text-sm text-gray-600 mb-1">{professional.role}</p>
                      )}
                      {professional.description && (
                        <p className="text-sm text-gray-500">{professional.description}</p>
                      )}
                      {professional.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-sm font-medium text-gray-900">{professional.rating}</span>
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      )}
                      {professional.role && (
                        <button
                          onClick={() => handleViewProfile(professional)}
                          className="text-sm text-gray-500 hover:text-gray-900 mt-2"
                        >
                          VIEW PROFILE
                        </button>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProfessional(professional)}
                      className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${
                        selectedProfessional?.id === professional.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Order Summary */}
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
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">Brazilian Bussdown</p>
                    <p className="text-sm text-gray-600">2:30 hr</p>
                    <p className="text-sm text-gray-600">No chosen professional</p>
                  </div>
                  <p className="font-medium text-gray-900">2,300.00 Birr</p>
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">2,300.00 Birr</span>
                </div>
              </div>

              <button
                onClick={handleContinue}
                className="w-full mt-6 bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Profile Modal */}
      {showProfileModal && viewingProfessional && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <img
                src={viewingProfessional.image}
                alt={viewingProfessional.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{viewingProfessional.name}</h3>
              <p className="text-gray-600 mb-2">{viewingProfessional.role}</p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-sm font-medium">{viewingProfessional.rating}</span>
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">clinets served</span>
                <span className="font-medium text-gray-900">324</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Languages</span>
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectProfessionals;

