import React, {Component} from 'react';
import axios from 'axios';
import TagCollectorDataTable from './TagCollectorDataTable'

const BASE_URL = 'https://www.instagram.com/web/search/topsearch/'
const CONTEXT = '?context=blended';
const QUERY = '&query=';

const instaCall = axios.create({
  baseURL: `${BASE_URL}`
});

class TagCollector extends Component {
  state = {
    tagName: '',
    tagData: [],
    fetched: false,
    error: null
  }

  handleSubmit = (e) => {

    this.setState({
      tagData: [],
      fetched: false
    });

    const getTag = async (tagName) => {
      try {
        const response = await instaCall.get(`${CONTEXT}${QUERY}${encodeURIComponent(`#`)}${tagName}`);
        this.setState({
          tagData: response.data.hashtags,
          fetched: true
        });
      } catch (e) {
        alert(e);
      }
    }

    if (!this.state.tagName) {
      return false;
    }

    getTag(this.state.tagName);
  }

  onInputChange(value) {
    this.setState({
      tagName: value
    });
  }

  onInputKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  componentDidMount() {
    this.props.cardCollapse();
    this.props.cardRemove();
    this.props.cardReload();
  }

  render() {
    return (
      <div className="content">
        <div className="card">

          {/* card-header header-elements-inline */}
          <div className="card-header header-elements-inline">
            <h5 className="card-title">인스타그램 태그 수집기</h5>
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
            인스타그램에서 태그를 검색했을 때 나오는 관련 태그들과 포스팅 수를 추출합니다. 결과는 실시간으로 제공됩니다.
            </p>

            <div className="form-group row">
              <label className="col-form-label col-lg-2">태그</label>
              <div className="col-lg-10">
                <div className="input-group">
                  <input type="text" name="tagName" id="tagName" className="form-control" value={this.state.tagName} onChange={e => this.onInputChange(e.target.value)} onKeyPress={(e) => this.onInputKeyPress(e)} placeholder="태그명 ex) 현대카드, 삼성카드"/>
                  <span className="input-group-append">
                    <button className="btn btn-light" type="button" onClick={() => this.handleSubmit()}>추출</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* /card-body */}

          {/* Datatable */}
          {
            this.state.tagData.length !== 0 && this.state.fetched !== false &&
            <TagCollectorDataTable tagData={this.state.tagData} dataTableBasic={this.props.dataTableBasic} fetched={this.state.fetched} />
          }
          {/* /Datatable */}

        </div>
      </div>
    );
  }
};

export default TagCollector;
