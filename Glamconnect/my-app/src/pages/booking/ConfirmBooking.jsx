import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CalendarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Header from '../../components/layout/Header';

const ConfirmBooking = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { service, professional, date, time, phone } = location.state || {};

  const salonInfo = {
    name: 'PRINCESS TREATMENT',
    rating: 4.5,
    reviews: 100,
    location: 'Bole Rwanda Embassy, 5m from WOW Burger',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
  };

  const handleConfirm = () => {
    setShowSuccessModal(true);
  };

  const handleContinue = () => {
    setShowSuccessModal(false);
    navigate('/appointments');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 text-sm text-gray-600 mb-6">
          <span>Services</span>
          <span>/</span>
          <span>Professionals</span>
          <span>/</span>
          <span>Schedule</span>
          <span>/</span>
          <span className="font-medium text-black">Confirm</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Confirm Booking</h1>

        <div className="flex gap-8">
          {/* Left Panel - Booking Summary */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <CalendarIcon className="w-6 h-6" />
                  <span>Saturday, Jan 3, 2026</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <ClockIcon className="w-6 h-6" />
                  <span>11:00 - 7:30 PM (2:30hr) Duration</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-2">Brazilian Bussdown</p>
                  <p className="text-sm text-gray-600">2:30 hr</p>
                  <p className="text-sm text-gray-600">No chosen professional</p>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <span className="font-bold text-xl text-gray-900">Total</span>
                  <span className="font-bold text-xl text-gray-900">2,300.00 Birr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Salon Details */}
          <div className="w-96">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-4">
                <img
                  src={salonInfo.image}
                  alt={salonInfo.name}
                  className="w-full h-48 rounded-lg object-cover mb-4"
                />
                <h3 className="font-bold text-xl text-gray-900 mb-2">{salonInfo.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{salonInfo.rating} ({salonInfo.reviews})</span>
                </div>
                <p className="text-sm text-gray-600">{salonInfo.location}</p>
              </div>

              <button
                onClick={handleConfirm}
                className="w-full bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-12 max-w-md w-full text-center relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you For Booking</h2>
            <p className="text-gray-600 mb-8">Princess Treatment Salon will contact you soon!</p>
            
            <div className="flex justify-center mb-8">
              <div className="relative">
                <CheckCircleIcon className="w-32 h-32 text-green-500" />
                {/* Confetti effect - simplified */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full border-4 border-green-200 animate-ping opacity-75"></div>
                </div>
              </div>
            </div>

            <button
              onClick={handleContinue}
              className="w-full bg-gray-800 text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmBooking;

