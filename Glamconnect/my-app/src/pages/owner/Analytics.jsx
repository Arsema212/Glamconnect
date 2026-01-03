import OwnerSidebar from '../../components/layout/OwnerSidebar';
import OwnerHeader from '../../components/layout/OwnerHeader';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <OwnerSidebar />
      
      <div className="flex-1 flex flex-col">
        <OwnerHeader />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">BUSINESS ANALYSIS</h1>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
              Monthly <span>›</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Key Metrics Cards */}
            <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Staffs</h3>
              <p className="text-3xl font-bold text-gray-900">6</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Appointments</h3>
              <p className="text-3xl font-bold text-gray-900">775</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Revenue (Birr)</h3>
              <p className="text-3xl font-bold text-gray-900">257,351.00</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Service Shares Pie Chart Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Service Shares</h3>
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-green-500 to-pink-500 opacity-20"></div>
                    <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">50%</div>
                        <div className="text-sm text-gray-600">Hair Services</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-600 rounded"></div>
                      <span className="text-sm text-gray-700">50% Hair Services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-700">25% Spa & Massage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-pink-500 rounded"></div>
                      <span className="text-sm text-gray-700">25% Nail Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="space-y-6">
              {/* Revenue Chart Placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue</h3>
                <div className="h-40 flex items-end justify-between gap-2">
                  {[500, 800, 1200, 1500, 1000, 1100, 900, 1300].map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-blue-600 rounded-t"
                        style={{ height: `${(value / 2000) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][idx]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Numbers Chart Placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Client Numbers</h3>
                <div className="h-40 flex items-end justify-between gap-2">
                  {[30, 60, 45, 50, 40].map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-blue-300 rounded-t"
                        style={{ height: `${(value / 60) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-2">{['6am', '12pm', '2pm', '10am', '7pm'][idx]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Rate Line Chart Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Salon Revenue Rate</h3>
              <div className="h-40 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm">Line Chart Placeholder</div>
                    <div className="text-xs mt-2">13% → 27% → 61% → 87%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Types Scatter Plot Placeholder */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Client Types</h3>
              <div className="h-40 relative border-2 border-pink-200 rounded-lg p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm text-gray-400">Scatter Plot Placeholder</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Domestic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">International</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

