import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

const ProfessionalLogin = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleContinue = (e) => {
    e.preventDefault();
    // Mock login for professional
    login({ name: 'Salon Owner', email, role: 'owner' });
    navigate('/owner/schedule');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 py-12 relative">
        <Link to="/auth" className="absolute top-6 left-8">
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </Link>
        
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">For Professionals</h1>
          <p className="text-gray-600 mb-8">Create an account and log in</p>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center gap-3 p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <span className="text-gray-700 font-medium">continue with Facebook</span>
            </button>

            <button className="w-full flex items-center gap-3 p-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">continue with Google</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleContinue} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">Have a customer account?</p>
            <Link to="/login/customer" className="text-blue-600 hover:underline">
              Sign in as a customer
            </Link>
          </div>

          <div className="mt-12">
            <button className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 font-medium">
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block w-1/2 gradient-bg-vertical relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800"
              alt="Beauty service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalLogin;

