import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import {
  MagnifyingGlassIcon,
  BellIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

const OwnerHeader = ({ showAddButton = false, onAddClick, dateSelector, salonSelector }) => {
  const [notificationCount] = useState(3);

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <Logo />
        {dateSelector && (
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200">
              Today
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="px-4 py-2 text-sm font-medium">{dateSelector}</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
        {salonSelector && (
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
            {salonSelector} <span className="ml-2">▼</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {showAddButton && (
          <button
            onClick={onAddClick}
            className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            ADD +
          </button>
        )}
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <BellIcon className="w-5 h-5 text-gray-600" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <CalendarIcon className="w-5 h-5 text-gray-600" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default OwnerHeader;

