import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function OrderDetailsPage() {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'text-green-600';
    case 'Cancelled':
      return 'text-red-500';
    case 'Pending':
      return 'text-yellow-500';
    case 'Refund':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
};

const getStatusTextWithIcon = (status) => {
  switch (status) {
    case 'Completed':
      return <>Completed <span className="text-green-600">▾</span></>;
    case 'Cancelled':
      return <>Cancelled <span className="text-red-500">▾</span></>;
    case 'Pending':
      return <>Pending <span className="text-yellow-500">▾</span></>;
    case 'Refund':
      return <>Refund <span className="text-blue-500">▾</span></>;
    default:
      return status;
  }
};
  return (
    <div className="flex h-screen overflow-hidden text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Order Details Body */}
        <div className="flex-1 overflow-y-auto bg-[#FBFFED] p-6 space-y-6 text-black">
          {/* Page Title */}
          <div>
            <h1 className="text-xl font-bold">Order Details</h1>
            <p className="text-sm text-gray-500">
              Detailed overview on orders
            </p>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Revenue Card */}
            <div className="bg-white p-4 rounded-lg shadow space-y-3">
              <div className="text-sm text-gray-500">Revenue</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">$125</div>
                <div className="text-yellow-500 text-sm font-medium">+2%</div>
              </div>
              {/* Mini chart line */}
              <div className="h-8 flex items-end justify-center">
                <svg width="60" height="20" viewBox="0 0 60 20" className="text-yellow-500">
                  <path
                    d="M2 18 L10 15 L18 12 L26 8 L34 10 L42 7 L50 9 L58 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Orders Paid Card */}
            <div className="bg-white p-4 rounded-lg shadow space-y-3">
              <div className="text-sm text-gray-500">Orders Paid</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">$67</div>
                <div className="text-green-500 text-sm font-medium">+4.5</div>
              </div>
              {/* Mini chart line */}
              <div className="h-8 flex items-end justify-center">
                <svg width="60" height="20" viewBox="0 0 60 20" className="text-green-500">
                  <path
                    d="M2 15 L10 12 L18 8 L26 5 L34 7 L42 4 L50 6 L58 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Refund Card */}
            <div className="bg-white p-4 rounded-lg shadow space-y-3">
              <div className="text-sm text-gray-500">Refund</div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">$250</div>
                <div className="text-red-500 text-sm font-medium">-18%</div>
              </div>
              {/* Mini chart line */}
              <div className="h-8 flex items-end justify-center">
                <svg width="60" height="20" viewBox="0 0 60 20" className="text-red-500">
                  <path
                    d="M2 8 L10 10 L18 13 L26 16 L34 14 L42 17 L50 15 L58 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Most Ordered Product Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Most Ordered Product</h2>
              <select className="border rounded px-3 py-1 text-sm outline-none text-gray-600">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            {/* Chart Area */}
            <div className="relative h-64 mb-4">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
                <span>Jul</span>
                <span>May</span>
                <span>Apr</span>
                <span>Mar</span>
                <span>Feb</span>
                <span>Jan</span>
              </div>

              {/* Chart container */}
              <div className="ml-8 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full border-t border-gray-100"
                      style={{ top: `${(i * 100) / 5}%` }}
                    ></div>
                  ))}
                </div>

                {/* Chart line */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M40 200 L80 180 L120 160 L160 120 L200 100 L240 90 L280 110 L320 95 L360 100 L400 90 L440 85"
                    stroke="#FFD700"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Data points */}
                  <circle cx="200" cy="100" r="4" fill="#FFD700" />
                  <circle cx="280" cy="110" r="4" fill="#FFD700" />
                  <circle cx="360" cy="100" r="4" fill="#FFD700" />
                  <circle cx="440" cy="85" r="4" fill="#FFD700" />
                </svg>

                {/* Peak indicator */}
                <div className="absolute top-16 right-20">
                  <div className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-medium">
                    Peak
                  </div>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-yellow-400 mx-auto"></div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-400 mt-2">
                <span>14</span>
                <span>16</span>
                <span>18</span>
                <span>20</span>
                <span>22</span>
                <span>24</span>
                <span>26</span>
                <span>28</span>
                <span>30</span>
              </div>
            </div>
          </div>

          {/* Order Table */}
          <div className="bg-white p-4 rounded-lg shadow">
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-lg" onClick={()=>{NavigationHistoryEntry}}>Order Details</h2>
    <div className="flex gap-2">
      <input
        type="text"
        className="border rounded px-3 py-1 text-sm outline-none"
        placeholder="Search by order ID"
      />
      <select className="border rounded px-2 py-1 text-sm outline-none">
        <option>Status</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Cancelled</option>
        <option>Refund</option>
      </select>
    </div>
  </div>
{/* <div className="bg-white p-4 rounded-lg shadow overflow-hidden"> */}
  <div className="overflow-x-auto rounded-t-lg mb-7">
  <table className="w-full text-sm text-left ">
    <thead className="text-gray-600 bg-gray-100">
      <tr className="h-10">
        <th className="px-4">Order ID</th>
        <th className="px-4">Products</th>
        <th className="px-2">Qty</th>
        <th className="px-2">Date</th>
        <th className="px-2">Mode</th>
        <th className="px-2">Status</th>
        <th className="px-2">Actions</th>
      </tr>
    </thead>

    <tbody className="text-gray-700 rounded-t-lg">
      {[
        { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Cash', status: 'Completed' },
        { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Card', status: 'Completed' },
        { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'UPI', status: 'Refund' },
        { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Cash', status: 'Cancelled' },
        { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Card', status: 'Pending' },
      ].map((row, i) => (
        <tr key={i} className="border-t hover:bg-gray-50">
          <td className="px-4 py-2">{row.id}</td>
          <td className="px-4 py-2">
            <div>Multivitamin Gummies</div>
            <div className="text-xs text-gray-500">Adults</div>
          </td>
          <td className="px-2 py-2">{row.qty}</td>
          <td className="px-2 py-2">{row.date}</td>
          <td className="px-2 py-2">{row.mode}</td>
          <td className={`px-2 py-2 font-medium ${getStatusColor(row.status)}`}>
            {getStatusTextWithIcon(row.status)}
          </td>
          {/* <td className="px-2 py-2 text-gray-400 flex gap-3 text-lg">
            ✏️ 🗑️ ⋯
          </td> */}
          <td className="px-2 py-2 text-gray-400 flex  mt-1 text-lg">
            <img onClick={()=>{
              navigate('/individual-order')
            }} src="/pencil.png" className='w-4 h-4 mt-2 ml-4 cursor-pointer ' />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


            {/* Pagination */}
            {/* <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-sm text-gray-500">
                Showing 1 to 5 of 50 entries
              </div>
              <div className="flex gap-1">
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">Next</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}