import React, {Component} from 'react';

class YTCommentCollector extends Component {
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
            <h5 className="card-title">유투브 댓글 수집기</h5>
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
              유투브 댓글을 추출합니다. 결과는 실시간으로 제공됩니다.
            </p>

            <div className="form-group row">
              <label className="col-form-label col-lg-2">유투브 URL</label>
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

export default YTCommentCollector;
