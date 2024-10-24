import React from 'react';
import MapContainer from './MapContainer'; // Import MapContainer

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Google Map integrated into Home */}
      <MapContainer />
    </div>
  );
};

export default Dashboard;
