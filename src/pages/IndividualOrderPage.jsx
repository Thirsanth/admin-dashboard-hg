// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';

// export default function IndividualOrderPage() {
//   return (
//     <div className="flex h-screen overflow-hidden text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">
//         {/* Header */}
//         <Header />

//         {/* Order Detail Body */}
//         <div className="flex-1 overflow-y-auto bg-[#FBFFED] p-6 space-y-6 text-black">
//           {/* Page Title */}
//           <div>
//             <h1 className="text-xl font-bold">Order Details</h1>
//             <p className="text-sm text-gray-500">
//               Products &gt; Kids Candles
//             </p>
//           </div>

//           {/* Order Details Card */}
//           <div className="bg-white p-6 rounded-lg shadow space-y-6">
//             {/* Customer Info Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Name</span>
//                   <span className="font-medium">Steve Martin</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Phone Number</span>
//                   <span className="font-medium">12X-908-875</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Delivery Address</span>
//                   <span className="font-medium">Delivery address 1st lane</span>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Order ID</span>
//                   <span className="font-medium">#5735567</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Transaction ID</span>
//                   <span className="font-medium">#987663</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600 text-sm">Email ID</span>
//                   <span className="font-medium">martinbo@gmail.com</span>
//                 </div>
//               </div>
//             </div>

//             {/* Order Overview Section */}
//             <div className="border-t pt-6">
//               <h3 className="text-lg font-semibold mb-4">Order Overview</h3>
              
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="text-gray-600 bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left font-medium">Product Name</th>
//                       <th className="px-4 py-3 text-left font-medium">Qty</th>
//                       <th className="px-4 py-3 text-left font-medium">Price</th>
//                       <th className="px-4 py-3 text-left font-medium">Order Date</th>
//                       <th className="px-4 py-3 text-left font-medium">Status</th>
//                       <th className="px-4 py-3 text-left font-medium">Delivery Date</th>
//                       <th className="px-4 py-3 text-left font-medium">Payment</th>
//                       <th className="px-4 py-3 text-left font-medium">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white">
//                     <tr className="border-t hover:bg-gray-50">
//                       <td className="px-4 py-3">
//                         <div>
//                           <div className="font-medium">Kids Candles</div>
//                           <div className="text-xs text-gray-500">Kids</div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">5</td>
//                       <td className="px-4 py-3">$30.00</td>
//                       <td className="px-4 py-3">Jan 10, 2021</td>
//                       <td className="px-4 py-3">
//                         <span className="text-yellow-500 font-medium">Pending</span>
//                       </td>
//                       <td className="px-4 py-3">Jan 15, 2021</td>
//                       <td className="px-4 py-3">Cash</td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 items-center">
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                               <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
//                             </svg>
//                           </button>
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr className="border-t hover:bg-gray-50">
//                       <td className="px-4 py-3">
//                         <div>
//                           <div className="font-medium">Adult Candles</div>
//                           <div className="text-xs text-gray-500">Adults</div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">5</td>
//                       <td className="px-4 py-3">$30.00</td>
//                       <td className="px-4 py-3">Jan 10, 2021</td>
//                       <td className="px-4 py-3">
//                         <span className="text-yellow-500 font-medium">Pending</span>
//                       </td>
//                       <td className="px-4 py-3">Jan 15, 2021</td>
//                       <td className="px-4 py-3">Cash</td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 items-center">
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                               <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
//                             </svg>
//                           </button>
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                               <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Send Mail Section */}
//             <div className="border-t pt-6">
//               <h3 className="text-lg font-semibold mb-4">Send Mail</h3>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Tracking ID
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                     placeholder="Enter tracking ID"
//                   />
//                 </div>
                
//                 <div className="flex justify-start">
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm">
//                     Send Shipment Email
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';

// export default function IndividualOrderPage() {
//   return (
//     <div className="flex h-screen overflow-hidden text-white">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex flex-col flex-1">
//         {/* Header */}
//         <Header />

//         {/* Order Detail Body */}
//         <div className="flex-1 overflow-y-auto bg-[#FBFFED] p-6 space-y-6 text-black">
//           {/* Page Title */}
//           <div>
//             <h1 className="text-xl font-bold">Order Details</h1>
//             <p className="text-sm text-gray-500">
//               Products &gt; Kids Candles
//             </p>
//           </div>

//           {/* Order Details Card */}
//           <div className="bg-white p-6 rounded-lg shadow space-y-6">
//             {/* Customer Info Section */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-6">
//                 <div>
//                   <div className="text-gray-600 text-sm mb-2">Name</div>
//                   <div className="font-medium text-lg">Steve Martin</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-600 text-sm mb-2">Phone number</div>
//                   <div className="font-medium">124-908-875</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-600 text-sm mb-2">Delivery Address</div>
//                   <div className="font-medium">Delivery address 1st lane</div>
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 <div>
//                   <div className="text-gray-600 text-sm mb-2">Order ID</div>
//                   <div className="font-medium text-lg">#1234567</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-600 text-sm mb-2">Transaction ID</div>
//                   <div className="font-medium">#987643</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-600 text-sm mb-2">Email ID</div>
//                   <div className="font-medium">martin09@gmail.com</div>
//                 </div>
//               </div>
//             </div>

//             {/* Order Overview Section */}
//             <div className="border-t pt-6">
//               <h3 className="text-lg font-semibold mb-4">Order Overview</h3>
              
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="text-gray-600 bg-gray-50">
//                     <tr>
//                       <th className="px-4 py-3 text-left font-medium">Product Name</th>
//                       <th className="px-4 py-3 text-left font-medium">Qty</th>
//                       <th className="px-4 py-3 text-left font-medium">Price</th>
//                       <th className="px-4 py-3 text-left font-medium">Order Date</th>
//                       <th className="px-4 py-3 text-left font-medium">Status</th>
//                       <th className="px-4 py-3 text-left font-medium">Delivery Date</th>
//                       <th className="px-4 py-3 text-left font-medium">Payment</th>
//                       <th className="px-4 py-3 text-left font-medium">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white">
//                     <tr className="border-t hover:bg-gray-50">
//                       <td className="px-4 py-3">
//                         <div>
//                           <div className="font-medium">Kids Candles</div>
//                           <div className="text-xs text-gray-500">Kids</div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">5</td>
//                       <td className="px-4 py-3">$30.00</td>
//                       <td className="px-4 py-3">Jan 10, 2021</td>
//                       <td className="px-4 py-3">
//                         <span className="text-yellow-500 font-medium">Pending</span>
//                       </td>
//                       <td className="px-4 py-3">Jan 15, 2021</td>
//                       <td className="px-4 py-3">Cash</td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 items-center">
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                               <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
//                             </svg> */}
//                             <img src="/pencil.png" className='w-4 h-4 mt-2  ' />
//                           </button>
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             ...
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr className="border-t hover:bg-gray-50">
//                       <td className="px-4 py-3">
//                         <div>
//                           <div className="font-medium">Adult Candles</div>
//                           <div className="text-xs text-gray-500">Adults</div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3">5</td>
//                       <td className="px-4 py-3">$30.00</td>
//                       <td className="px-4 py-3">Jan 10, 2021</td>
//                       <td className="px-4 py-3">
//                         <span className="text-yellow-500 font-medium">Pending</span>
//                       </td>
//                       <td className="px-4 py-3">Jan 15, 2021</td>
//                       <td className="px-4 py-3">Cash</td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 items-center">
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//                               <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
//                             </svg> */}
//                             <img src="/pencil.png" className='w-4 h-4 mt-2  ' />
//                           </button>
//                           <button className="text-gray-400 hover:text-gray-600 p-1">
//                             ...
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Send Mail Section */}
//             <div className="border-t pt-6">
//               <h3 className="text-lg font-semibold mb-4">Send Mail</h3>
              
//               <div className="space-y-4 flex flex-row">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Tracking ID
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                     placeholder="Enter tracking ID"
//                   />
//                 </div>
                
//                 <div className="">
//                   <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm">
//                     Send Shipment Email
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function IndividualOrderPage() {
  return (
    <div className="flex h-screen overflow-hidden text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Order Detail Body */}
        <div className="flex-1 overflow-y-auto bg-[#FBFFED] p-6 space-y-6 text-black">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-xl font-bold mb-1">Order Details</h1>
            <p className="text-sm text-gray-500">
              Products &gt; Kids Candles
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white p-6 rounded-lg shadow space-y-8">
            {/* Customer Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              <div className="space-y-4">
                <div>
                  <div className="text-gray-500 text-sm mb-1">Name</div>
                  <div className="font-medium">Steve Martin</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Phone number</div>
                  <div className="font-medium">124-908-875</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Delivery Address</div>
                  <div className="font-medium">Delivery address 1st lane</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-gray-500 text-sm mb-1">Order ID</div>
                  <div className="font-medium">#1234567</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Transaction ID</div>
                  <div className="font-medium">#987643</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm mb-1">Email ID</div>
                  <div className="font-medium">martin09@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Order Overview Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Overview</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Product Name</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Qty</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Price</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Order Date</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Status</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Delivery Date</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Payment</th>
                      <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-t">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Kids Candles</div>
                          <div className="text-xs text-gray-500">Kids</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">$50.00</td>
                      <td className="px-4 py-3">Jan 10, 2021</td>
                      <td className="px-4 py-3">
                        <span className="text-orange-500 font-medium">Pending</span>
                      </td>
                      <td className="px-4 py-3">Jan 15, 2021</td>
                      <td className="px-4 py-3">Cash</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2 items-center">
                          <button className="text-gray-400 hover:text-gray-600 p-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 p-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">Adult Candles</div>
                          <div className="text-xs text-gray-500">Adult</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">5</td>
                      <td className="px-4 py-3">$50.00</td>
                      <td className="px-4 py-3">Jan 10, 2021</td>
                      <td className="px-4 py-3">
                        <span className="text-orange-500 font-medium">Pending</span>
                      </td>
                      <td className="px-4 py-3">Jan 15, 2021</td>
                      <td className="px-4 py-3">Cash</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2 items-center">
                          <button className="text-gray-400 hover:text-gray-600 p-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-gray-600 p-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Send Mail Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Send Mail</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tracking ID
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    className="flex-1 max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter tracking ID"
                  />
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm whitespace-nowrap">
                    Send Shipment Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}