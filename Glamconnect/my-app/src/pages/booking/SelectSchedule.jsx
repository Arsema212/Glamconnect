import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Header from '../../components/layout/Header';

const SelectSchedule = () => {
  const [selectedDate, setSelectedDate] = useState('31');
  const [selectedTime, setSelectedTime] = useState(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { service, professional } = location.state || {};

  const dates = [
    { day: '31', label: '31 Wed' },
    { day: '1', label: '1 Thur' },
    { day: '2', label: '2 Frid' },
    { day: '3', label: '3 Sat' },
    { day: '4', label: '4 Sun' },
    { day: '5', label: '5 Mon' },
    { day: '6', label: '6 Tues' },
  ];

  const timeSlots = ['6:00 AM', '10:00 AM', '1:00 PM', '12:00 - 2:30 AM'];

  const salonInfo = {
    name: 'PRINCESS TREATMENT',
    rating: 4.5,
    reviews: 100,
    location: 'Bole Rwanda Embassay, 5m from WOW Burger',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
  };

  const handleContinue = () => {
    if (selectedTime) {
      setShowPhoneModal(true);
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setShowPhoneModal(false);
    navigate('/booking/confirm', {
      state: { service, professional, date: selectedDate, time: selectedTime, phone: phoneNumber },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Panel - Schedule Selection */}
          <div className="flex-1">
            <div className="flex gap-2 text-sm text-gray-600 mb-6">
              <span>Services</span>
              <span>/</span>
              <span>Professionals</span>
              <span>/</span>
              <span className="font-medium text-black">Schedule</span>
              <span>/</span>
              <span>Confirm</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Select Schedule</h1>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">December 2025</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Date Picker */}
            <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
              {dates.map((date) => (
                <button
                  key={date.day}
                  onClick={() => setSelectedDate(date.day)}
                  className={`min-w-[70px] py-3 px-4 rounded-full font-medium transition-colors ${
                    selectedDate === date.day
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <div className="space-y-3">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedTime === time
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <span className="font-medium text-gray-900">{time}</span>
                </button>
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

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CalendarIcon className="w-5 h-5" />
                  <span className="text-sm">Wednesday, Dec 31, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <ClockIcon className="w-5 h-5" />
                  <span className="text-sm">12:00 - 2:30 AM (2:30hr) Duration</span>
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
                disabled={!selectedTime}
                className="w-full mt-6 bg-gray-300 text-gray-600 py-4 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Number Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Add Phone</h2>
            <p className="text-gray-600 mb-6">Enter your phone number to confirm your appointment</p>

            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value="+251"
                    readOnly
                    className="w-20 px-4 py-3 border border-gray-300 rounded-xl bg-gray-50"
                  />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectSchedule;

