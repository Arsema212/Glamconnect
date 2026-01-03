import { Link } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      status: 'active',
      salonName: 'Princess Treatment',
      serviceCount: 1,
      services: ['Brazillian Bussdown'],
      date: 'WEDNESDAY - DECEMBER 31-2025',
      time: '12:00 - 2:30 AM',
    },
    {
      id: 2,
      status: 'inactive',
      statusText: 'Inactive (Week ago)',
      salonName: 'Princess Treatment',
      serviceCount: 3,
      services: ['Brazillian Bussdown', 'Nail Fullset', 'Facial Scrub'],
      date: 'WEDNESDAY - DECEMBER 24-2025',
      time: '10:00 - 1:30 PM',
    },
    {
      id: 3,
      status: 'inactive',
      statusText: 'Inactive (12 days ago)',
      salonName: 'Meti hair salon & spa',
      serviceCount: 1,
      services: ['Brazillian Bussdown'],
      date: 'MONDAY - DECEMBER 19-2025',
      time: '2:00 - 4:30 PM',
    },
  ];

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Appointments</h1>

          <div className="space-y-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        appointment.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    ></div>
                    <span className="font-medium text-gray-900">
                      {appointment.status === 'active' ? 'Active' : appointment.statusText}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{appointment.salonName}</h3>
                <p className="text-sm text-gray-600 mb-4">{appointment.serviceCount} Service{appointment.serviceCount > 1 ? 's' : ''}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {appointment.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {appointment.status === 'inactive' && (
                  <div className="text-right">
                    <Link
                      to={`/appointments/${appointment.id}`}
                      className="text-sm text-gray-600 hover:text-gray-900 underline"
                    >
                      see details
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;

