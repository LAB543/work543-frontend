import React from 'react';

const TagCollector = (props) => {
  return (
    <div className="content" style={{height: '100vh'}}>
      <div className="card">

        {/* card-header header-elements-inline */}
        <div className="card-header header-elements-inline">
          <h5 className="card-title">인스타그램 태그 수집기</h5>
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
            인스타그램에서 태그를 검색했을 때 나오는 관련 태그들과 포스팅 수를 추출합니다. 결과는 실시간으로 제공됩니다.
          </p>

          <div className="form-group row">
            <label className="col-form-label col-lg-2">태그</label>
            <div className="col-lg-10">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="태그명 ex) 현대카드, 삼성카드"/>
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

export default TagCollector;
