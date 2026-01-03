import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { PencilIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Arsema',
    lastName: 'Mengistu',
    mobileNumber: '+2519 54876855',
    email: 'arsemamengistu95@gmail.com',
    dateOfBirth: '',
    gender: '',
    address: '',
    address2: '',
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          {/* Avatar Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold mb-4">
                A
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-50">
                <PencilIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{profile.firstName} {profile.lastName}</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <p className="text-gray-900">{profile.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <p className="text-gray-900">{profile.lastName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.mobileNumber}
                    onChange={(e) => setProfile({ ...profile, mobileNumber: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <p className="text-gray-900">{profile.mobileNumber}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
                    {profile.email}
                  </a>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={profile.dateOfBirth}
                    onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <p className="text-gray-500">{profile.dateOfBirth || '--'}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
                {isEditing ? (
                  <select
                    value={profile.gender}
                    onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <p className="text-gray-500">{profile.gender || '--'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Address Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                ) : (
                  <p className="text-gray-500">{profile.address || '--'}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Address Number2</label>
                <div className="flex gap-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.address2}
                      onChange={(e) => setProfile({ ...profile, address2: e.target.value })}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  ) : (
                    <p className="flex-1 text-gray-500">{profile.address2 || '--'}</p>
                  )}
                  <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

