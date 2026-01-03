import OwnerSidebar from '../../components/layout/OwnerSidebar';
import OwnerHeader from '../../components/layout/OwnerHeader';

const Notifications = () => {
  const notifications = [
    {
      clientId: '0001',
      bookedService: 'S1',
      bookedSchedule: '12:00-10:00am',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'New',
      paymentMode: 'Chappa',
    },
    {
      clientId: '0002',
      bookedService: 'S2',
      bookedSchedule: '9:00-10:00am',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'New',
      paymentMode: 'Cash',
    },
    {
      clientId: '0003',
      bookedService: 'S1, S5, S9',
      bookedSchedule: '11:00-3:00pm',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'Inactive',
      paymentMode: 'Chappa',
    },
    {
      clientId: '0004',
      bookedService: 'S2',
      bookedSchedule: '7:00-8:00pm',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'Inactive',
      paymentMode: 'Cash',
    },
    {
      clientId: '0005',
      bookedService: 'S5',
      bookedSchedule: '10:00-11:00am',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'Inactive',
      paymentMode: 'Chappa',
    },
    {
      clientId: '0006',
      bookedService: 'S1, S2',
      bookedSchedule: '2:00-4:00pm',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'Inactive',
      paymentMode: 'Cash',
    },
    {
      clientId: '0007',
      bookedService: 'S9',
      bookedSchedule: '5:00-6:00pm',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'Inactive',
      paymentMode: 'Chappa',
    },
    {
      clientId: '0008',
      bookedService: 'S1, S5',
      bookedSchedule: '1:00-2:00pm',
      bookedTime: '8:00pm Dec 30, 2025',
      activityStatus: 'Inactive',
      paymentMode: 'Cash',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OwnerSidebar />
      
      <div className="flex-1 flex flex-col">
        <OwnerHeader />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">NOTIFICATION</h1>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 flex items-center gap-2">
              Dec 31 2025 <span>›</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Booked Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Booked Schedule</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Booked Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Activity Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Payment Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {notifications.map((notification, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{notification.clientId}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{notification.bookedService}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{notification.bookedSchedule}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{notification.bookedTime}</td>
                    <td className="px-6 py-4">
                      {notification.activityStatus === 'New' ? (
                        <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                          {notification.activityStatus}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-700">{notification.activityStatus}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{notification.paymentMode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

