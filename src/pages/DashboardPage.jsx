import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {

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
      <div className="flex flex-col flex-1 ">
        {/* Header */}
        <Header />

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto bg-[#FBFFED] p-6 space-y-6 text-black">
          {/* Welcome & Export Report */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold">Welcome Jason!</h1>
              <p className="text-sm text-gray-500">
                Track your sales activity, stocks and more
              </p>
            </div>
            <button className="bg-[#FFD700] text-white px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md">
              Export Report
            </button>
          </div>

          {/* New Orders + In Progress */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* New Orders */}
            <StatCard
              title="New Orders"
              count="283"
              growth="↑ 0.29%"
              description="Last Order Received: 2 min ago"
              barColor="bg-blue-500"
              barWidth="w-[90%]"
            />

            {/* Orders In Progress */}
            <StatCard
              title="Orders In Progress"
              count="90"
              growth="↑ 0.18%"
              description="Last Order Delivered: 15 min ago"
              barColor="bg-yellow-400"
              barWidth="w-[75%]"
            />
          </div>

          {/* Sales Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Sales', value: '1090', icon: '/dollar1.png', change: '+0.29%' },
              { label: 'Total Earnings', value: '$6200.50', icon: '/dollar2.png', change: '+0.29%' },
              { label: 'Avg Order Value', value: '$500', icon: 'dollar3.png', change: '-0.29%', down: true },
              { label: 'Total Orders', value: '1,25,500', icon: 'dollar4.png', change: '+0.29%' },
            ].map((card, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow space-y-2">
                <div><img src={card.icon} alt={card.label} className="w-6 h-6" /></div>
                <div className="text-sm text-gray-500">{card.label}</div>
                <div className="text-xl font-bold">{card.value}</div>
                <div className={`text-sm ${card.down ? 'text-red-500' : 'text-green-600'}`}>
                  {card.down ? '↓' : '↑'} {card.change}
                </div>
              </div>
            ))}
          </div>

         <div className="flex flex-col md:flex-row gap-4">
  {/* Order Status (narrow width) */}
  <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between w-full md:w-[30%]">
    <div className="flex justify-between items-center mb-2">
      <h2 className="font-semibold text-sm">Order Status</h2>
      <span className="text-xs text-gray-500">Last 7 days ▾ </span>
    </div>
    <div className='mt-5 text-gray-100'>
      <hr></hr>
    </div>
    <div className="flex items-center flex-col ">
      <img src="/orderstatus.png" alt="Order Graph" className="w-[350px] h-[350px] mt-[-60px]  mr-5 object-contain" />
      <div className="mt-[-60px]">
        <div className="flex justify-between "><span className='mr-33 mb-5'>🟢 Successful Orders</span><span className="font-medium">1900</span></div>
        <div className="flex justify-between"><span className='mb-5'>🟡 Pending Orders</span><span className="font-medium">109</span></div>
        <div className="flex justify-between"><span className='mb-5'>🔵 Returned Orders</span><span className="font-medium">270</span></div>
        <div className="flex justify-between"><span  className='mb-5'>🔴 Cancelled Orders</span><span className="font-medium">56</span></div>
      </div>
    </div>
  </div>

  {/* Order Statistics (wide width) */}
  <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between w-full md:w-[70%]">
    <div className="flex justify-between items-center mb-2">
      <h2 className="font-semibold text-sm">Order Statistics</h2>
      <span className="text-xs text-gray-500">Last 7 days ▾</span>
    </div>
    <div  className=' text-gray-100 mt-[-12px]'>
      <hr></hr>
    </div>
    <img src="/orderstatistics.png" alt="Statistics Graph" className="w-full h-[320px] object-contain" />
    <div className="text-[11px] text-gray-400 mt-1"></div>
  </div>
</div>


          {/* Payment Methods + Transactions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Payment Methods */}
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
              <div className="flex justify-between">
                <h2 className="font-semibold">Payment Methods</h2>
                <span className="text-sm text-gray-500">Last 7 days ▾</span>
              </div>
              <div  className=' text-gray-100 mt-[-10px]'>
      <hr></hr>
    </div>
              {[{method:'Credit Card', icon:'/pm1.png'},{ method:'Cash', icon:'/pm2.png'},{method: 'UPI', icon:'/pm3.png'}, {method:'Debit Card', icon:'/pm4.png'}].map((pm, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className='ml-[100px]'>
                  <img src={pm.icon} alt='img' className="w-4 h-4" />
                  <span>{pm.method}</span>
                  </div>
                  <div className='mr-[100px]'>
                  <span className="bg-yellow-400 text-sm font-medium px-2 py-1 rounded">25%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Transactions */}
            <div className="bg-white p-4 rounded-lg shadow space-y-4">
              <h2 className="font-semibold">Recent Transactions</h2>
              <div  className=' text-gray-100 mt-[-10px]'>
      <hr></hr>
    </div>
              {[
                { product: 'Kids Candies', id: '#1234567', price: '$100.05', status: 'Paid' },
                { product: 'Adults Candies', id: '#1234567', price: '$100.05', status: 'Pending' },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <img src="/hg.png" className="w-8 h-8" alt="icon" />
                    <div>
                      <div className="font-medium">{tx.product}</div>
                      <div className="text-gray-500">{tx.id}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div>{tx.price}</div>
                    <div className={tx.status === 'Paid' ? 'text-green-600' : 'text-red-500'}>
                      {tx.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order table */}
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
          <td className="px-2 py-2 text-gray-400 flex gap-3 mt-1 text-lg">
            <img onClick={()=>{navigate('/individual-order')}} src="/pencil.png" className='w-4 h-4 mt-2 cursor-pointer ' /><img  src="/bin.png" className='w-4 h-4 mt-2' /> ⋯
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
{/* </div> */}

        </div>
      </div>
    </div>
  );
}

function StatCard({ title, count, growth, description, barColor, barWidth }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-2">
      {/* Title + Dropdown */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-sm text-gray-500">Today ▾</span>
      </div>

      {/* Count + Growth + Description in one row */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          {count} <span className="text-green-600 text-sm font-medium">{growth}</span>
        </div>
        <div className="text-sm text-gray-500 text-right">
          {description}
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`h-1 ${barColor} ${barWidth} rounded-sm`}></div>
    </div>
  );
}

