import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const AuthLanding = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Auth Options */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 py-12 relative">
        <Link to="/" className="absolute top-6 left-8">
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </Link>
        
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sign up / Log in
          </h1>

          <div className="space-y-4">
            <Link
              to="/login/customer"
              className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">For customers</h3>
                <p className="text-sm text-gray-600">Book Salons and Spas near you</p>
              </div>
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/login/professional"
              className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">For Professionals</h3>
                <p className="text-sm text-gray-600">Manage and grow your business</p>
              </div>
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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

export default AuthLanding;
