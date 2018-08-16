import React from 'react';

const PostCollector = (props) => {
  return (
    <div className="content" style={{height: '100vh'}}>
      <div className="card">

        {/* card-header header-elements-inline */}
        <div className="card-header header-elements-inline">
          <h5 className="card-title">인스타그램 포스팅 수집기</h5>
          <div className="header-elements">
            <div className="list-icons">
              <button className="list-icons-item" data-action="collapse"></button>
              <button className="list-icons-item" data-action="reload"></button>
              <button className="list-icons-item" data-action="remove"></button>
            </div>
          </div>
        </div>
        {/* /card-header header-elements-inline */}

        {/* card-body */}
        <div className="card-body">
          <p className="mb-4">
            아이디 / 지역 / 태그 기반 포스팅을 추출합니다. 결과는 배치로 제공됩니다.
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
};

export default PostCollector;
