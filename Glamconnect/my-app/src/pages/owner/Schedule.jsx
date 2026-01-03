import { useState } from 'react';
import OwnerSidebar from '../../components/layout/OwnerSidebar';
import OwnerHeader from '../../components/layout/OwnerHeader';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Schedule = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedService, setSelectedService] = useState('Silk Press');
  const [selectedProfessional, setSelectedProfessional] = useState('Any');
  const [selectedDate, setSelectedDate] = useState('December 31, 2025');

  const staff = [
    { id: 1, name: 'Abenet', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', borderColor: 'green' },
    { id: 2, name: 'Meseret', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', borderColor: 'pink' },
    { id: 3, name: 'Hewan', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', borderColor: 'blue' },
    { id: 4, name: 'Etsubdink', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', borderColor: 'pink' },
    { id: 5, name: 'Alex', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', borderColor: 'purple' },
    { id: 6, name: 'Habtamu', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', borderColor: 'green' },
  ];

  const timeSlots = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm'];

  const appointments = [
    { staffId: 1, time: '6:00-7:00', name: 'Abenet Abiye', service: 'Silk Press', color: 'bg-green-500' },
    { staffId: 6, time: '7:30-8:00', name: 'Habtamu Zeberga', service: 'Silk Press', color: 'bg-green-400' },
    { staffId: 2, time: '6:00-7:00', name: 'Meseret Adugna', service: 'Facial Scrub', color: 'bg-purple-300' },
    { staffId: 2, time: '8:00-9:20', name: 'Meseret Adugna', service: 'Brazillian Bussdown', color: 'bg-purple-300' },
    { staffId: 3, time: '7:00-8:10', name: 'Hewan Getachew', service: 'Body Massage', color: 'bg-blue-300' },
    { staffId: 4, time: '6:30-7:30', name: 'Etsubdink Haile', service: 'Nail Art', color: 'bg-pink-400' },
    { staffId: 5, time: '6:30-7:45', name: 'Alex Kurabachew', service: 'Brazillian Bussdown', color: 'bg-purple-300' },
    { staffId: 1, time: '10:00-11:00', name: 'Abenet Abiye', service: 'Silk Press', color: 'bg-green-500' },
    { staffId: 2, time: '11:00-12:00', name: 'Meseret Adugna', service: 'Facial Scrub', color: 'bg-purple-300' },
    { staffId: 5, time: '11:00-12:00', name: 'Alex Kurabachew', service: 'Brazillian Bussdown', color: 'bg-purple-300' },
    { staffId: 6, time: '12:00-1:00', name: 'Habtamu Zeberga', service: 'Silk Press', color: 'bg-green-400' },
    { staffId: 3, time: '12:00-1:00', name: 'Hewan Getachew', service: 'Body Massage', color: 'bg-blue-300' },
    { staffId: 4, time: '9:45-10:30', name: 'Etsubdink Haile', service: 'Nail Art', color: 'bg-pink-400' },
  ];

  const getBorderClass = (color) => {
    const colors = {
      green: 'ring-2 ring-green-400',
      pink: 'ring-2 ring-pink-400',
      blue: 'ring-2 ring-blue-400',
      purple: 'ring-2 ring-purple-400',
    };
    return colors[color] || colors.green;
  };

  const getAppointmentsForSlot = (staffId, timeSlot) => {
    return appointments.filter(apt => {
      const slotTime = timeSlot.replace(' am', '').replace(' pm', '');
      const aptStart = apt.time.split('-')[0];
      return apt.staffId === staffId && aptStart.includes(slotTime.split(':')[0]);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OwnerSidebar />
      
      <div className="flex-1 flex flex-col">
        <OwnerHeader
          showAddButton={true}
          onAddClick={() => setShowAddModal(true)}
          dateSelector="Wednesday, Dec 31"
          salonSelector="Trendy Salons"
        />
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Staff Row */}
          <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200">
            {staff.map((member) => (
              <div key={member.id} className="flex flex-col items-center min-w-[100px]">
                <div className={`w-16 h-16 rounded-full overflow-hidden mb-2 ${getBorderClass(member.borderColor)}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{member.name}</span>
              </div>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="relative">
            <div className="flex">
              {/* Time Column */}
              <div className="w-24 flex-shrink-0">
                {timeSlots.map((time) => (
                  <div key={time} className="h-20 border-b border-gray-200 flex items-start pt-2">
                    <span className="text-sm text-gray-600">{time}</span>
                  </div>
                ))}
              </div>

              {/* Staff Columns */}
              <div className="flex-1 grid grid-cols-6 gap-2">
                {staff.map((member) => (
                  <div key={member.id} className="relative">
                    {timeSlots.map((time) => {
                      const slotAppointments = getAppointmentsForSlot(member.id, time);
                      return (
                        <div key={time} className="h-20 border-b border-r border-gray-200 relative">
                          {slotAppointments.map((apt, idx) => (
                            <div
                              key={idx}
                              className={`absolute left-1 right-1 ${apt.color} rounded-lg p-2 text-white text-xs shadow-sm`}
                              style={{
                                top: '4px',
                                height: 'calc(100% - 8px)',
                              }}
                            >
                              <div className="font-medium">{apt.time}</div>
                              <div className="text-xs opacity-90">{apt.name}</div>
                              <div className="text-xs opacity-75">{apt.service}</div>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Service Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose your Services</h2>

            <div className="space-y-6">
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose your Services:</h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {['Silk Press', 'Nail work', 'Brazillian bussdown', 'Makeup', 'Hair Cut', 'Color'].map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                        selectedService === service
                          ? 'bg-gray-200 text-gray-900'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                  <span className="px-2 text-gray-400">›</span>
                </div>
              </div>

              {/* Professionals */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose your Professional:</h3>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {['Any', 'Abenet', 'Meseret', 'Hewan', 'Etsubdink', 'Alex'].map((prof) => (
                    <button
                      key={prof}
                      onClick={() => setSelectedProfessional(prof)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                        selectedProfessional === prof
                          ? 'bg-gray-200 text-gray-900'
                          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {prof}
                    </button>
                  ))}
                  <span className="px-2 text-gray-400">›</span>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose your Schedule:</h3>
                <div className="relative">
                  <input
                    type="text"
                    value={selectedDate}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={() => {
                  console.log('Adding service:', { selectedService, selectedProfessional, selectedDate });
                  setShowAddModal(false);
                }}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;

