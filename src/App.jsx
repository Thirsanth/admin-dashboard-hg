// import React from 'react';
// import Dashboard from './pages/Dashboard';
// import DashboardPage from './pages/DashboardPage';


// export default function App() {
//   return <DashboardPage />;
// }

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import IndividualOrderPage from './pages/IndividualOrderPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route redirects to dashboard */}
          <Route path="/" element={<DashboardPage />} />
          
          {/* Dashboard route */}
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* Order Details route */}
          <Route path="/order-details" element={<OrderDetailsPage />} />

          <Route path="/individual-order" element={<IndividualOrderPage />} />
          
          {/* Add routes for other sidebar items */}
          <Route path="/inventory" element={<div className="p-6"><h1>Inventory Page - Coming Soon</h1></div>} />
          <Route path="/products" element={<div className="p-6"><h1>Products Page - Coming Soon</h1></div>} />
          
          {/* You can add more routes here as needed */}
          {/* <Route path="/customers" element={<CustomersPage />} /> */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          
          {/* Catch all route - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;