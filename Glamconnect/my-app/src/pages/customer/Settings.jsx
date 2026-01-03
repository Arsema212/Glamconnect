import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';

const Settings = () => {
  const [socialLogins, setSocialLogins] = useState({
    facebook: false,
    google: true,
  });

  const [notifications, setNotifications] = useState({
    appointmentText: true,
    appointmentWhatsApp: true,
    marketingEmail: true,
    marketingText: true,
    marketingWhatsApp: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSocialLogin = (platform) => {
    setSocialLogins((prev) => ({ ...prev, [platform]: !prev[platform] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

          {/* Social Logins */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">My social Logins</h3>
            <p className="text-gray-600 mb-6">Link social profiles for easier access to your Glamconnect account.</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">f</span>
                  </div>
                  <span className="font-medium text-gray-900">Facebook</span>
                </div>
                <button
                  onClick={() => toggleSocialLogin('facebook')}
                  className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${
                    socialLogins.facebook
                      ? 'border-red-500 text-red-600 hover:bg-red-50'
                      : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {socialLogins.facebook ? 'Disconnect' : 'Connect'}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Google</span>
                </div>
                <button
                  onClick={() => toggleSocialLogin('google')}
                  className={`px-6 py-2 rounded-lg border-2 font-medium transition-colors ${
                    socialLogins.google
                      ? 'border-red-500 text-red-600 hover:bg-red-50'
                      : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {socialLogins.google ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">My notifications</h3>
            <p className="text-gray-600 mb-6">We will send you updates about your appointments, news and offers.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Appointment notification:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Text Message</span>
                    <button
                      onClick={() => toggleNotification('appointmentText')}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        notifications.appointmentText ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications.appointmentText ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">WhatsApp</span>
                    <button
                      onClick={() => toggleNotification('appointmentWhatsApp')}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        notifications.appointmentWhatsApp ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications.appointmentWhatsApp ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Marketing notification:</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email</span>
                    <button
                      onClick={() => toggleNotification('marketingEmail')}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        notifications.marketingEmail ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications.marketingEmail ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Text Message</span>
                    <button
                      onClick={() => toggleNotification('marketingText')}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        notifications.marketingText ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications.marketingText ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">WhatsApp</span>
                    <button
                      onClick={() => toggleNotification('marketingWhatsApp')}
                      className={`relative w-14 h-7 rounded-full transition-colors ${
                        notifications.marketingWhatsApp ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          notifications.marketingWhatsApp ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Change Password</h3>
            <p className="text-gray-600 mb-6">Update your Glamconnect password</p>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Update password
            </button>
          </div>

          {/* Delete Account */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Account</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to leave Glamconnect?</p>
            <button className="border-2 border-red-500 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

