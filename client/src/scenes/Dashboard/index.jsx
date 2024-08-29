import React from 'react';
import Wallet from './Wallet';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <>
      <Wallet sx={{mb: 5}} />
      <Profile />
    </>
  );
};

export default Dashboard;
