import React from 'react';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="page-content">
      <Sidebar />
      <div className="content-wrapper">
        <div className="content" style={{height: '100vh',}}>
          Home Component
        </div>
      </div>
    </div>
  );
};

export default Home;
