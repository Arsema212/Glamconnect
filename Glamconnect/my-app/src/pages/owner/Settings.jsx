import { useState } from 'react';
import OwnerSidebar from '../../components/layout/OwnerSidebar';
import OwnerHeader from '../../components/layout/OwnerHeader';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    if (lang !== language) {
      toggleLanguage();
    }
  };

  const handleThemeChange = (newTheme) => {
    setSelectedTheme(newTheme);
    if (newTheme !== theme) {
      toggleTheme();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OwnerSidebar />
      
      <div className="flex-1 flex flex-col">
        <OwnerHeader />
        
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">SETTINGS</h1>

          <div className="space-y-8">
            {/* Language Settings */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Language Settings</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedLanguage === 'en'
                      ? 'bg-black text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('am')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedLanguage === 'am'
                      ? 'bg-black text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  Amharic
                </button>
              </div>
            </div>

            {/* Theme Settings */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Theme Setting</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedTheme === 'light'
                      ? 'bg-black text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  Light
                </button>
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedTheme === 'dark'
                      ? 'bg-black text-white'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;