import React from 'react';

const Dashboard = () => {
  return (
    <div className="content" style={{height: '100vh'}}>
      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media">
              <div className="mr-3 align-self-center">
                <i className="icon-pointer icon-3x text-success-400"></i>
              </div>

              <div className="media-body text-right">
                <h3 className="font-weight-semibold mb-0">652,549</h3>
                <span className="text-uppercase font-size-sm text-muted">total clicks</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media">
              <div className="mr-3 align-self-center">
                <i className="icon-enter6 icon-3x text-indigo-400"></i>
              </div>

              <div className="media-body text-right">
                <h3 className="font-weight-semibold mb-0">245,382</h3>
                <span className="text-uppercase font-size-sm text-muted">total visits</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media">
              <div className="media-body">
                <h3 className="font-weight-semibold mb-0">54,390</h3>
                <span className="text-uppercase font-size-sm text-muted">total comments</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-bubbles4 icon-3x text-blue-400"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media">
              <div className="media-body">
                <h3 className="font-weight-semibold mb-0">389,438</h3>
                <span className="text-uppercase font-size-sm text-muted">total orders</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-bag icon-3x text-danger-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-blue-400 has-bg-image">
            <div className="media">
              <div className="media-body">
                <h3 className="mb-0">54,390</h3>
                <span className="text-uppercase font-size-xs">total comments</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-bubbles4 icon-3x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-danger-400 has-bg-image">
            <div className="media">
              <div className="media-body">
                <h3 className="mb-0">389,438</h3>
                <span className="text-uppercase font-size-xs">total orders</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-bag icon-3x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-success-400 has-bg-image">
            <div className="media">
              <div className="mr-3 align-self-center">
                <i className="icon-pointer icon-3x opacity-75"></i>
              </div>

              <div className="media-body text-right">
                <h3 className="mb-0">652,549</h3>
                <span className="text-uppercase font-size-xs">total clicks</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-indigo-400 has-bg-image">
            <div className="media">
              <div className="mr-3 align-self-center">
                <i className="icon-enter6 icon-3x opacity-75"></i>
              </div>

              <div className="media-body text-right">
                <h3 className="mb-0">245,382</h3>
                <span className="text-uppercase font-size-xs">total visits</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media mb-3">
              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Server maintenance</h6>
                <span className="text-muted">Until 1st of June</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-cog3 icon-2x text-indigo-400 opacity-75"></i>
              </div>
            </div>

            <div className="progress mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-indigo-400" style={{width: '67%'}}>
                <span className="sr-only">67% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">67%</span>
              Re-indexing
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media mb-3">
              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Services status</h6>
                <span className="text-muted">April, 19th</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-pulse2 icon-2x text-danger-400 opacity-75"></i>
              </div>
            </div>

            <div className="progress mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-danger-400" style={{width: '80%'}}>
                <span className="sr-only">80% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">80%</span>
              Partly operational
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media mb-3">
              <div className="mr-3 align-self-center">
                <i className="icon-cog3 icon-2x text-blue-400 opacity-75"></i>
              </div>

              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Server maintenance</h6>
                <span className="text-muted">Until 1st of June</span>
              </div>
            </div>

            <div className="progress mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-blue" style={{width: '67%'}}>
                <span className="sr-only">67% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">67%</span>
              Re-indexing
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body">
            <div className="media mb-3">
              <div className="mr-3 align-self-center">
                <i className="icon-pulse2 icon-2x text-success-400 opacity-75"></i>
              </div>

              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Services status</h6>
                <span className="text-muted">April, 19th</span>
              </div>
            </div>

            <div className="progress mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-success-400" style={{width: '80%'}}>
                <span className="sr-only">80% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">80%</span>
              Partly operational
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-blue-400 has-bg-image">
            <div className="media mb-3">
              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Server maintenance</h6>
                <span className="opacity-75">Until 1st of June</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-cog3 icon-2x"></i>
              </div>
            </div>

            <div className="progress bg-blue mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-white" style={{width: '67%'}}>
                <span className="sr-only">67% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">67%</span>
              Re-indexing
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-danger-400 has-bg-image">
            <div className="media mb-3">
              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Services status</h6>
                <span className="opacity-75">April, 19th</span>
              </div>

              <div className="ml-3 align-self-center">
                <i className="icon-pulse2 icon-2x"></i>
              </div>
            </div>

            <div className="progress bg-danger-600 mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-white" style={{width: '80%'}}>
                <span className="sr-only">80% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">80%</span>
              Partly operational
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-success-400 has-bg-image">
            <div className="media mb-3">
              <div className="mr-3 align-self-center">
                <i className="icon-cog3 icon-2x"></i>
              </div>

              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Server maintenance</h6>
                <span className="opacity-75">Until 1st of June</span>
              </div>
            </div>

            <div className="progress bg-success mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-white" style={{width: '67%'}}>
                <span className="sr-only">67% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">67%</span>
              Re-indexing
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card-body bg-indigo-400 has-bg-image">
            <div className="media mb-3">
              <div className="mr-3 align-self-center">
                <i className="icon-pulse2 icon-2x"></i>
              </div>

              <div className="media-body">
                <h6 className="font-weight-semibold mb-0">Services status</h6>
                <span className="opacity-75">April, 19th</span>
              </div>
            </div>

            <div className="progress bg-indigo mb-2" style={{height: '0.125rem'}}>
              <div className="progress-bar bg-white" style={{width: '80%'}}>
                <span className="sr-only">80% Complete</span>
              </div>
            </div>

            <div>
              <span className="float-right">80%</span>
              Partly operational
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default Dashboard;
