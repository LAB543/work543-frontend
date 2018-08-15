import React from 'react';

const NoMatch = () => {
  return (
    <div className="content d-flex justify-content-center align-items-center">
      {/* error wrapper */}
      <div className="flex-fill">

        <div className="text-center">
          <h1 className="error-title">404</h1>
          <h5>Oops, an error has occurred. Page not found!</h5>
        </div>

      </div>
      {/* /error wrapper */}
    </div>
  );
};

export default NoMatch;
