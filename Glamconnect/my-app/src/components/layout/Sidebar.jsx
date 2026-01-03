import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';
import { useAuth } from '../../contexts/AuthContext';
import {
  UserIcon,
  CalendarIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    { path: '/profile', icon: UserIcon, label: 'Profile' },
    { path: '/appointments', icon: CalendarIcon, label: 'Appointments' },
    { path: '/settings', icon: Cog6ToothIcon, label: 'Settings' },
    { path: '/help', icon: QuestionMarkCircleIcon, label: 'Help & Support' },
  ];

  return (
    <div className="w-64 bg-white h-screen flex flex-col shadow-sm">
      <div className="p-6 border-b">
        <Logo />
      </div>
      
      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-full transition-colors ${
                isActive
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t">
        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="flex items-center gap-3 px-4 py-3 w-full text-gray-700 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

