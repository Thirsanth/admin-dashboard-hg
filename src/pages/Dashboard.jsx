// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';

// export default function Dashboard() {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <main className="p-6 space-y-6 overflow-y-auto">
//           {/* Section 1: Stat Cards (Image 3 UI Style) */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { label: 'Revenue', value: '$12,345', color: 'bg-green-500', icon: '💰' },
//               { label: 'Users', value: '1,234', color: 'bg-blue-500', icon: '👤' },
//               { label: 'Sales', value: '987', color: 'bg-orange-500', icon: '🛒' },
//               { label: 'Growth', value: '25%', color: 'bg-purple-500', icon: '📈' }
//             ].map((item, i) => (
//               <div key={i} className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
//                 {/* Left content: Icon + Text */}
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-xl">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h2 className="text-gray-500 text-sm">{item.label}</h2>
//                     <p className="text-2xl font-bold text-gray-800">{item.value}</p>
//                   </div>
//                 </div>
//                 {/* Right vertical bar */}
//                 <div className={`w-2 h-12 rounded ${item.color}`} />
//               </div>
//             ))}
//           </div>

//           {/* Section 2: Charts and Tables */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-xl shadow h-64">
//               <h3 className="text-lg font-semibold mb-4">Sales Chart</h3>
//               <div className="w-full h-full bg-gray-100 rounded" />
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow h-64">
//               <h3 className="text-lg font-semibold mb-4">User Activity</h3>
//               <div className="w-full h-full bg-gray-100 rounded" />
//             </div>
//           </div>

//           {/* Section 3: Recent Transactions */}
//           <div className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
//             <table className="w-full text-left">
//               <thead>
//                 <tr>
//                   <th className="text-sm text-gray-500 pb-2">Name</th>
//                   <th className="text-sm text-gray-500 pb-2">Amount</th>
//                   <th className="text-sm text-gray-500 pb-2">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[1, 2, 3, 4].map((item) => (
//                   <tr key={item} className="border-t text-sm">
//                     <td className="py-2">User {item}</td>
//                     <td className="py-2">$1,000</td>
//                     <td className="py-2">2025-05-28</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#F1F5F9]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="p-8 space-y-8 overflow-y-auto">
          {/* Section 1: Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {[
              { label: 'New Orders', value: '283', color: 'text-black bg-white', progcol:"blue" },
              { label: 'Orders In Progress', value: '90', color: 'test-black bg-white',progcol:"yellow" },
            ].map(({ label, value, color,progcol }, i) => (
              <div key={i} className={`p-6 rounded-xl shadow ${color}`}>
                <h2 className="text-sm mb-1">{label}</h2>
                <p className="text-3xl font-bold mt-7">{value}</p>
                <progress value={50} className={`h-2 transition-all${progcol}]`} ></progress>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Sales', value: '1090', color: 'bg-white text-black' , im:'./dol1.png' },
              { label: 'Total Earnings', value: '$6200.50', color: 'bg-white text-black',im:'./dol2.png' },
              { label: 'Avg Order Val', value: '$500', color: 'bg-white text-black',im:'./dol3.png' },
              { label: 'Total Orders', value: '1,25,500', color: 'bg-white text-black',im:'./dol4.png' },
            ].map(({ label, value, color,im }, i) => (
              <div key={i} className={`p-6 rounded-xl shadow ${color}`}>
                <img src={`${im}`} alt="Happy Gummies" className="h-3" />
                <h2 className="text-sm mb-1 mt-2">{label}</h2>
                <p className="text-3xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          {/* Section 2: Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">Sales Chart</h3>
              <div className="w-full h-52 bg-gray-100 rounded" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-4">User Activity</h3>
              <div className="w-full h-52 bg-gray-100 rounded" />
            </div>
          </div>

          {/* Section 3: Recent Transactions */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-6">Recent Transactions</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr>
                  <th className="text-gray-500 pb-2">Name</th>
                  <th className="text-gray-500 pb-2">Amount</th>
                  <th className="text-gray-500 pb-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((item) => (
                  <tr key={item} className="border-t">
                    <td className="py-2">User {item}</td>
                    <td className="py-2">$1,000</td>
                    <td className="py-2">2025-05-28</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
