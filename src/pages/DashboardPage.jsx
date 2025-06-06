// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';

// export default function DashboardPage() {
//   return (

//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">
//         {/* Header */}
//         <Header />

//         {/* Dashboard Body */}
//         <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
//     <div className="p-6 bg-[#fdfbf5] min-h-screen space-y-6">
//       {/* Welcome & Export Report */}
//       <div className="flex justify-between items-start">
//         <div>
//           <h1 className="text-xl font-bold">Welcome Jason!</h1>
//           <p className="text-sm text-gray-500">
//             Track your sales activity, stocks and more
//           </p>
//         </div>
//         <button className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-medium shadow-sm hover:shadow-md">
//           Export Report
//         </button>
//       </div>

//       {/* New Orders + In Progress */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {/* New Orders */}
//         <div className="bg-white rounded-lg shadow p-4 space-y-2">
//           <div className="flex justify-between items-center">
//             <h2 className="font-semibold">New Orders</h2>
//             <span className="text-sm text-gray-500">Today ▾</span>
//           </div>
//           <div className="text-2xl font-bold">283 <span className="text-green-600 text-sm font-medium">↑ 0.29%</span></div>
//           <p className="text-sm text-gray-500">Last Order Received: 2 min ago</p>
//           <div className="h-1 bg-blue-500 w-[90%] rounded-sm"></div>
//         </div>

//         {/* Orders In Progress */}
//         <div className="bg-white rounded-lg shadow p-4 space-y-2">
//           <div className="flex justify-between items-center">
//             <h2 className="font-semibold">Orders In Progress</h2>
//             <span className="text-sm text-gray-500">Today ▾</span>
//           </div>
//           <div className="text-2xl font-bold">90 <span className="text-green-600 text-sm font-medium">↑ 0.18%</span></div>
//           <p className="text-sm text-gray-500">Last Order Delivered: 15 min ago</p>
//           <div className="h-1 bg-yellow-400 w-[75%] rounded-sm"></div>
//         </div>
//       </div>

//       {/* Sales Summary Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {[
//           { label: 'Total Sales', value: '1090', icon: '🟥', change: '+0.29%' },
//           { label: 'Total Earnings', value: '$6200.50', icon: '🟪', change: '+0.29%' },
//           { label: 'Avg Order Value', value: '$500', icon: '🟩', change: '-0.29%', down: true },
//           { label: 'Total Orders', value: '1,25,500', icon: '🟦', change: '+0.29%' },
//         ].map((card, i) => (
//           <div key={i} className="bg-white p-4 rounded-lg shadow space-y-2">
//             <div className="text-2xl">{card.icon}</div>
//             <div className="text-sm text-gray-500">{card.label}</div>
//             <div className="text-xl font-bold">{card.value}</div>
//             <div className={`text-sm ${card.down ? 'text-red-500' : 'text-green-600'}`}>
//               {card.down ? '↓' : '↑'} {card.change}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Order Status (Doughnut) */}
//         <div className="bg-white p-4 rounded-lg shadow space-y-4">
//           <div className="flex justify-between">
//             <h2 className="font-semibold">Order Status</h2>
//             <span className="text-sm text-gray-500">Last 7 days ▾</span>
//           </div>
//           <img src="/graph.png" alt="Order Graph" className="w-full h-40 object-contain" />
//           <div className="grid grid-cols-2 gap-2 text-sm">
//             <div>🟢 Successful Orders <span className="float-right font-medium">1900</span></div>
//             <div>🟡 Pending Orders <span className="float-right font-medium">109</span></div>
//             <div>🔵 Returned Orders <span className="float-right font-medium">270</span></div>
//             <div>🔴 Cancelled Orders <span className="float-right font-medium">56</span></div>
//           </div>
//         </div>

//         {/* Order Statistics Line Graph */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex justify-between mb-2">
//             <h2 className="font-semibold">Order Statistics</h2>
//             <span className="text-sm text-gray-500">Last 7 days ▾</span>
//           </div>
//           <img src="/graph.png" alt="Statistics Graph" className="w-full h-40 object-contain" />
//         </div>
//       </div>

//       {/* Payment Methods + Transactions */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Payment Methods */}
//         <div className="bg-white p-4 rounded-lg shadow space-y-4">
//           <div className="flex justify-between">
//             <h2 className="font-semibold">Payment Methods</h2>
//             <span className="text-sm text-gray-500">Last 7 days ▾</span>
//           </div>
//           {['Credit Card', 'Cash', 'UPI', 'Debit Card'].map((method, i) => (
//             <div key={i} className="flex justify-between items-center border-b pb-2">
//               <span>{method}</span>
//               <span className="bg-yellow-400 text-sm font-medium px-2 py-1 rounded">25%</span>
//             </div>
//           ))}
//         </div>

//         {/* Recent Transactions */}
//         <div className="bg-white p-4 rounded-lg shadow space-y-4">
//           <h2 className="font-semibold">Recent Transactions</h2>
//           {[
//             { product: 'Kids Candies', id: '#1234567', price: '$100.05', status: 'Paid' },
//             { product: 'Adults Candies', id: '#1234567', price: '$100.05', status: 'Pending' },
//             { product: 'Kids Candies', id: '#1234567', price: '$100.05', status: 'Paid' },
//             { product: 'Kids Candies', id: '#1234567', price: '$100.05', status: 'Paid' },
//             { product: 'Kids Candies', id: '#1234567', price: '$100.05', status: 'Paid' },
//           ].map((tx, i) => (
//             <div key={i} className="flex justify-between items-center text-sm">
//               <div className="flex items-center gap-2">
//                 <img src="/logo.png" className="w-8 h-8" alt="icon" />
//                 <div>
//                   <div className="font-medium">{tx.product}</div>
//                   <div className="text-gray-500">{tx.id}</div>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div>{tx.price}</div>
//                 <div className={tx.status === 'Paid' ? 'text-green-600' : 'text-red-500'}>
//                   {tx.status}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Order Table */}
//       <div className="bg-white p-4 rounded-lg shadow">
//         <div className="flex justify-between mb-4">
//           <h2 className="font-semibold">Order Details</h2>
//           <div className="flex gap-2">
//             <input
//               className="border rounded px-3 py-1 text-sm"
//               placeholder="Search by order ID"
//             />
//             <select className="border rounded px-2 text-sm">
//               <option>Status</option>
//               <option>Completed</option>
//               <option>Pending</option>
//               <option>Cancelled</option>
//             </select>
//           </div>
//         </div>
//         <table className="w-full text-sm text-left">
//           <thead className="text-gray-600">
//             <tr>
//               <th>Order ID</th>
//               <th>Products</th>
//               <th>Qty</th>
//               <th>Date</th>
//               <th>Mode</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700">
//             {[
//               { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Cash', status: 'Completed' },
//               { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Card', status: 'Completed' },
//               { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'UPI', status: 'Refund' },
//               { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Cash', status: 'Cancelled' },
//               { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Card', status: 'Pending' },
//             ].map((row, i) => (
//               <tr key={i} className="border-t">
//                 <td>{row.id}</td>
//                 <td>
//                   <div>Multivitamin Gummies</div>
//                   <div className="text-gray-500 text-xs">Adults</div>
//                 </td>
//                 <td>{row.qty}</td>
//                 <td>{row.date}</td>
//                 <td>{row.mode}</td>
//                 <td className={`font-medium ${getStatusColor(row.status)}`}>
//                   {row.status}
//                 </td>
//                 <td className="text-gray-400">✏️ 🗑️ ⋯</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// function getStatusColor(status) {
//   if (status === 'Completed') return 'text-green-600';
//   if (status === 'Cancelled') return 'text-red-500';
//   if (status === 'Refund') return 'text-blue-600';
//   if (status === 'Pending') return 'text-yellow-500';
//   return '';
// }


import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function DashboardPage() {

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

          {/* Order Table */}
          {/* <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Order Details</h2>
              <div className="flex gap-2">
                <input
                  className="border rounded px-3 py-1 text-sm"
                  placeholder="Search by order ID"
                />
                <select className="border rounded px-2 text-sm">
                  <option>Status</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>
            <table className="w-full text-sm text-left p-[10px] mb-5">
              <thead className="text-gray-600 bg-gray-100 p-[10px] mb-[100px]">
                <tr>
                  <th>Order ID</th>
                  <th>Products</th>
                  <th>Qty</th>
                  <th>Date</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Cash', status: 'Completed' },
                  { id: '#5302002', qty: 2, date: 'Jan 10, 2021', mode: 'Card', status: 'Cancelled' },
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td>{row.id}</td>
                    <td>
                      <div>Multivitamin Gummies</div>
                      <div className="text-gray-500 text-xs">Adults</div>
                    </td>
                    <td>{row.qty}</td>
                    <td>{row.date}</td>
                    <td>{row.mode}</td>
                    <td className={`font-medium ${getStatusColor(row.status)}`}>
                      {row.status}
                    </td>
                    <td className="text-gray-400">✏️ 🗑️ ⋯</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          <div className="bg-white p-4 rounded-lg shadow">
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-lg">Order Details</h2>
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
            <img src="/pencil.png" className='w-4 h-4 mt-2 ' /><img  src="/bin.png" className='w-4 h-4 mt-2' /> ⋯
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

// Status color utility
function getStatusColor(status) {
  if (status === 'Completed') return 'text-green-600';
  if (status === 'Cancelled') return 'text-red-500';
  if (status === 'Refund') return 'text-blue-600';
  if (status === 'Pending') return 'text-yellow-500';
  return '';
}

// Stat card component
// function StatCard({ title, count, growth, description, barColor, barWidth }) {
//   return (
//     <div className="bg-white rounded-lg shadow p-4 space-y-2">
//       <div className="flex justify-between items-center">
//         <h2 className="font-semibold">{title}</h2>
//         <span className="text-sm text-gray-500">Today ▾</span>
//       </div>
//       <div className="text-2xl font-bold">
//         {count} <span className="text-green-600 text-sm font-medium">{growth}</span>
//       </div>
//       <p className="text-sm text-gray-500">{description}</p>
//       <div className={`h-1 ${barColor} ${barWidth} rounded-sm`}></div>
//     </div>
//   );
// }

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

