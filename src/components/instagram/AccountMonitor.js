import React, {Component} from 'react';

class AccountMonitor extends Component {
  componentDidMount() {
    this.props.cardCollapse();
    this.props.cardRemove();
    this.props.cardReload();
  }

  render() {
    return (
      <div className="content" style={{height: '100vh'}}>
        <div className="card">

          {/* card-header header-elements-inline */}
          <div className="card-header header-elements-inline">
            <h5 className="card-title">인스타그램 계정 모니터</h5>
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
              인스타그램 계정을 모니터링합니다. 결과는 배치로 제공됩니다.
            </p>

            <div className="form-group row">
              <label className="col-form-label col-lg-2">아이디 / 지역 / 태그</label>
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

        </div>
      </div>
    );
  }
};

export default AccountMonitor;
