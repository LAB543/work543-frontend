import React from 'react';

const PrivacyMasking = (props) => {
  return(
    <div className="card">

      { /* card-header header-elements-inline */ }
      <div className="card-header header-elements-inline">
        <h5 className="card-title">개인정보 마스킹</h5>
        <div className="header-elements">
          <div className="list-icons">
            <a className="list-icons-item" data-action="collapse"></a>
            <a className="list-icons-item" data-action="reload"></a>
            <a className="list-icons-item" data-action="remove"></a>
          </div>
        </div>
      </div>
      { /* /card-header header-elements-inline */ }

      { /* card-body */ }
      <div className="card-body">
        <p className="mb-4">
          입력된 파일의 개인정보를 마스킹합니다. 결과는 배치로 제공됩니다.
        </p>

        <div className="form-group row">
          <label className="col-form-label col-lg-2">파일 업로드</label>
          <div className="col-lg-10">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Right button" />
              <span className="input-group-append">
                <button className="btn btn-light" type="button">업로드</button>
              </span>
            </div>
          </div>
        </div>

      </div>
      { /* /card-body */ }

    </div>
  );
};

export default PrivacyMasking;
