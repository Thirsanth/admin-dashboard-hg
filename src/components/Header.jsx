// import React from 'react';

// export default function Header() {
//   return (
//     <div className="w-full h-16 bg-white border-b flex justify-between items-center px-6">
//       <h1 className="text-lg font-semibold">Dashboard Overview</h1>
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="px-3 py-1 border rounded-md"
//         />
//         <div className="w-8 h-8 rounded-full bg-gray-300" />
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { Search } from 'lucide-react';

// export default function Header() {
//   return (
//     <div className="w-full h-20 bg-[#F8FAFC] border-b flex justify-between items-center px-8 shadow-sm">
//       {/* <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1> */}
//       <div className="flex items-right space-x-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-4 py-2 pl-10 border rounded-full text-sm bg-white shadow"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//         </div>
//         <div className="w-10 h-10 rounded-full bg-gray-300" />
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function Header() {
  return (
    <div className="flex justify-end items-center w-full h-14 px-6 bg-white border-b shadow-sm">
      {/* Notification Bell */}
      <div className="relative mr-4">
        <img src="/bell.png" alt="Notifications" className="w-10 h-10" />
        {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
      </div>

      {/* Profile Icon */}
      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
        <img src="/user.png" alt="Profile" className="w-5 h-5" />
      </div>
    </div>
  );
}
