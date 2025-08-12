import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/fullscreen.css';
import { useSelector } from 'react-redux';

const FullscreenLoader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);

  if (!isLoading) return null;

  return (
    <Fragment>
      <div className="loading-overlay d-flex justify-content-center align-items-center">
        <div style={{ width: '300px' }}>
          <div className="progress" style={{ height: '8px', borderRadius: '20px' }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
              role="progressbar"
              style={{ width: '100%' }}
            ></div>
          </div>
          <p className="text-white mt-3 text-center fw-bold">
            Loading, please wait...
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default FullscreenLoader;
