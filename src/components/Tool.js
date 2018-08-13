import React from 'react';
import Sidebar from './Sidebar';

const Tool = (props) => {
  return(
      <div className="page-content">
          <Sidebar />
          <div className="content-wrapper">
              <div className="content" style={{height: '100vh',}}>
                  this is the tool
              </div>
          </div>
      </div>
  );
};

export default Tool;