import { Link, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';
import {
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  SpeakerWaveIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const OwnerSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/owner/schedule', icon: CalendarIcon, label: 'Schedule' },
    { path: '/owner/staff', icon: UserGroupIcon, label: 'Staff' },
    { path: '/owner/analytics', icon: ChartBarIcon, label: 'Analytics' },
    { path: '/owner/notifications', icon: SpeakerWaveIcon, label: 'Notifications' },
    { path: '/owner/settings', icon: Cog6ToothIcon, label: 'Settings' },
  ];

  const getActivePath = () => {
    if (location.pathname.startsWith('/owner/schedule')) return '/owner/schedule';
    if (location.pathname.startsWith('/owner/staff')) return '/owner/staff';
    if (location.pathname.startsWith('/owner/analytics')) return '/owner/analytics';
    if (location.pathname.startsWith('/owner/notifications')) return '/owner/notifications';
    if (location.pathname.startsWith('/owner/settings')) return '/owner/settings';
    return location.pathname;
  };

  const activePath = getActivePath();

  return (
    <div className="w-20 bg-gray-900 h-screen flex flex-col items-center py-6">
      <div className="mb-8">
        <Logo />
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default OwnerSidebar;

