import { useState } from 'react';
import OwnerSidebar from '../../components/layout/OwnerSidebar';
import OwnerHeader from '../../components/layout/OwnerHeader';
import { XMarkIcon } from '@heroicons/react/24/outline';

const StaffMembers = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    speciality: '',
    otherSkills: '',
  });

  const staffMembers = [
    {
      id: '01',
      name: 'Abenet',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      activeDuty: 'Silk Press Technician',
      monthlyAppointments: 150,
      monthlyReviews: 5,
      successRate: 40,
      borderColor: 'green',
    },
    {
      id: '02',
      name: 'Meseret',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      activeDuty: 'Facial Scrub',
      monthlyAppointments: 138,
      monthlyReviews: 5,
      successRate: 20,
      borderColor: 'pink',
    },
    {
      id: '03',
      name: 'Hewan',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      activeDuty: 'Body Massage',
      monthlyAppointments: 103,
      monthlyReviews: 4.8,
      successRate: 15,
      borderColor: 'blue',
    },
    {
      id: '04',
      name: 'Etsubdink',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
      activeDuty: 'Nail Technician',
      monthlyAppointments: 68,
      monthlyReviews: 4.5,
      successRate: 6,
      borderColor: 'pink',
    },
    {
      id: '05',
      name: 'Alex',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      activeDuty: 'Brazillian Bussdown',
      monthlyAppointments: 55,
      monthlyReviews: 4,
      successRate: 6,
      borderColor: 'blue',
    },
    {
      id: '06',
      name: 'Habtamu',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      activeDuty: 'Hair color',
      monthlyAppointments: 25,
      monthlyReviews: 3.5,
      successRate: 3,
      borderColor: 'green',
    },
  ];

  const getBorderClass = (color) => {
    const colors = {
      green: 'ring-4 ring-green-400 ring-offset-2',
      pink: 'ring-4 ring-pink-400 ring-offset-2',
      blue: 'ring-4 ring-blue-400 ring-offset-2',
    };
    return colors[color] || colors.green;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Adding staff:', formData);
    setShowAddModal(false);
    setFormData({ firstName: '', lastName: '', speciality: '', otherSkills: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OwnerSidebar />
      
      <div className="flex-1 flex flex-col">
        <OwnerHeader showAddButton={true} onAddClick={() => setShowAddModal(true)} />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">STAFF MEMBERS</h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                Dec <span className="ml-1">›</span>
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:opacity-90"
              >
                ADD +
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Staff ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Staff Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Active Duty</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Monthly appointments</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Monthly reviews</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Success rate (%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {staffMembers.map((staff) => (
                  <tr key={staff.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{staff.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full overflow-hidden ${getBorderClass(staff.borderColor)}`}>
                          <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{staff.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{staff.activeDuty}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{staff.monthlyAppointments}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{staff.monthlyReviews}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{staff.successRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Staff Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">ADD A STAFF</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Speciality</label>
                <div className="relative">
                  <select
                    value={formData.speciality}
                    onChange={(e) => setFormData({ ...formData, speciality: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                    required
                  >
                    <option value="">Select speciality</option>
                    <option value="Silk Press Technician">Silk Press Technician</option>
                    <option value="Facial Scrub">Facial Scrub</option>
                    <option value="Body Massage">Body Massage</option>
                    <option value="Nail Technician">Nail Technician</option>
                    <option value="Brazillian Bussdown">Brazillian Bussdown</option>
                    <option value="Hair color">Hair color</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Other skills</label>
                <textarea
                  value={formData.otherSkills}
                  onChange={(e) => setFormData({ ...formData, otherSkills: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter other skills..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffMembers;

