import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';

// Pages
import Home from './pages/Home';
import AuthLanding from './pages/auth/AuthLanding';
import CustomerLogin from './pages/auth/CustomerLogin';
import ProfessionalLogin from './pages/auth/ProfessionalLogin';
import SelectServices from './pages/booking/SelectServices';
import SelectProfessionals from './pages/booking/SelectProfessionals';
import SelectSchedule from './pages/booking/SelectSchedule';
import ConfirmBooking from './pages/booking/ConfirmBooking';
import Profile from './pages/customer/Profile';
import Appointments from './pages/customer/Appointments';
import Settings from './pages/customer/Settings';
import Help from './pages/customer/Help';
import SalonDetail from './pages/salon/SalonDetail';
// Owner pages
import OwnerSchedule from './pages/owner/Schedule';
import StaffMembers from './pages/owner/StaffMembers';
import Analytics from './pages/owner/Analytics';
import Notifications from './pages/owner/Notifications';
import OwnerSettings from './pages/owner/Settings';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<AuthLanding />} />
              <Route path="/login/customer" element={<CustomerLogin />} />
              <Route path="/login/professional" element={<ProfessionalLogin />} />
              <Route path="/salon/:id" element={<SalonDetail />} />
              <Route path="/booking/services" element={<SelectServices />} />
              <Route path="/booking/professionals" element={<SelectProfessionals />} />
              <Route path="/booking/schedule" element={<SelectSchedule />} />
              <Route path="/booking/confirm" element={<ConfirmBooking />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              {/* Owner routes */}
              <Route path="/owner/schedule" element={<OwnerSchedule />} />
              <Route path="/owner/staff" element={<StaffMembers />} />
              <Route path="/owner/analytics" element={<Analytics />} />
              <Route path="/owner/notifications" element={<Notifications />} />
              <Route path="/owner/settings" element={<OwnerSettings />} />
            </Routes>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
