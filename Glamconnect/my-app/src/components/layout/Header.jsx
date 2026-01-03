import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { useAuth } from '../../contexts/AuthContext';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Header = ({ showSearch = false }) => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {showSearch && (
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search your salon"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button className="text-sm font-medium">EN</button>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">A</span>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                    >
                      <UserIcon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">Profile</span>
                    </Link>
                    <Link
                      to="/appointments"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-sm font-medium">Appointments</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium">Settings</span>
                    </Link>
                    <Link
                      to="/help"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">Help & Support</span>
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/auth" className="text-sm font-medium hover:text-gray-700">
                  Log in
                </Link>
                <Link
                  to="/login/professional"
                  className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50"
                >
                  List your business
                </Link>
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50">
                  Menu =
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

