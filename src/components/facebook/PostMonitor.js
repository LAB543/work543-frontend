import React, {Component} from 'react';

class PostMonitor extends Component {
  componentDidMount(){
    this.props.cardCollapse();
    this.props.cardRemove();
    this.props.cardReload();
  }
  render() {
    return (
      <div className="content" style={{height: '100vh'}} >
        <div className="card">

          {/* card-header header-elements-inline */}
          <div className="card-header header-elements-inline">
            <h5 className="card-title">페이스북 포스트 모니터</h5>
            <div className="header-elements">
              <div className="list-icons">
                <a className="list-icons-item" data-action="collapse"> </a>
                <a className="list-icons-item" data-action="reload"> </a>
                <a className="list-icons-item" data-action="remove"> </a>
              </div>
            </div>
          </div>
          {/* /card-header header-elements-inline */}

          {/* card-body */}
          <div className="card-body">
            <p className="mb-4">
              페이스북 포스트를 모니터링합니다. 결과는 배치로 제공됩니다.
            </p>

            <div className="form-group row">
              <label className="col-form-label col-lg-2">페이스북 URL</label>
              <div className="col-lg-10">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Right button"/>
                  <span className="input-group-append">
                  <button className="btn btn-light" type="button">추출</button>
                </span>
                </div>
              </div>
            </div>
          </div>
          {/* /card-body */}

          {/* Datatable */}
          <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
            { /* Datatable-header */}
            <div className="datatable-header">
              <div id="DataTables_Table_0_filter" className="dataTables_filter">
                <label>
                  <span>Filter:</span>
                  <input type="search" className="" placeholder="Type to filter..." aria-controls="DataTables_Table_0" />
                </label>
              </div>
              <div className="dataTables_length" id="DataTables_Table_0_length">
                <label>
                  <span>Show:</span>
                  <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="select2-hidden-accessible"
                    tabIndex="-1" aria-hidden="true">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="-1">All</option>
                  </select>
                  <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: 'auto' }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false"
                        tabIndex="0" aria-labelledby="select2-DataTables_Table_0_length-54-container">
                        <span className="select2-selection__rendered" id="select2-DataTables_Table_0_length-54-container" title="10">10</span>
                        <span className="select2-selection__arrow" role="presentation">
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                </label>
              </div>
            </div>
            {/* /Datatable-header */}
            {/* /Datatable-scoll */}
            <div className="datatable-scroll">
              <table className="table datatable-show-all dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                <thead>
                  <tr role="row">
                    <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-sort="ascending"
                      aria-label="First Name: activate to sort column descending">First Name</th>
                    <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Last Name: activate to sort column ascending">Last Name</th>
                    <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Job Title: activate to sort column ascending">Job Title</th>
                    <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="DOB: activate to sort column ascending">DOB</th>
                    <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending">Status</th>
                    <th className="text-center sorting_disabled" rowSpan="1" colSpan="1" aria-label="Actions" style={{ width: '100px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">Aura</td>
                    <td>Hard</td>
                    <td>Business Services Sales Representative</td>
                    <td>19 Apr 1969</td>
                    <td>
                      <span className="badge badge-danger">Suspended</span>
                    </td>
                    <td className="text-center">
                      <div className="list-icons">
                        <div className="dropdown">
                          <a className="list-icons-item" data-toggle="dropdown">
                            <i className="icon-menu9"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item"><i className="icon-file-pdf"></i> Export to .pdf</a>
                            <a className="dropdown-item"><i className="icon-file-excel"></i> Export to .csv</a>
                            <a className="dropdown-item"><i className="icon-file-word"></i> Export to .doc</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">Chantal</td>
                    <td>
                      <a>Nailor</a>
                    </td>
                    <td>Technical Services Librarian</td>
                    <td>10 Jan 1980</td>
                    <td>
                      <span className="badge badge-secondary">Inactive</span>
                    </td>
                    <td className="text-center">
                      <div className="list-icons">
                        <div className="dropdown">
                          <a className="list-icons-item" data-toggle="dropdown">
                            <i className="icon-menu9"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item"><i className="icon-file-pdf"></i> Export to .pdf</a>
                            <a className="dropdown-item"><i className="icon-file-excel"></i> Export to .csv</a>
                            <a className="dropdown-item"><i className="icon-file-word"></i> Export to .doc</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /Datatable-scoll */}
          </div>
          {/* /Datatable */}
        </div>
      </div>
    );
  }
};

export default PostMonitor;
