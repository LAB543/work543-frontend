import React, {Component} from 'react';
import axios from 'axios';
import CommentCollectorDataTable from './CommentCollectorDataTable'

// https://www.youtube.com/watch?v=Sy8sIYeGlCk 댓글 300 이상 영상
// https://www.youtube.com/watch?v=826y8Bi1k9k 댓글 100 미만 영상

const BASE_URL = 'https://www.googleapis.com/'
const COMMENT_THREADS = 'youtube/v3/commentThreads?'
const PART = 'part=snippet,replies';
const ORDER = '&order=time';
const TEXT_FORMAT = '&textFormat=plainText';
const MAX_RESULTS = '&maxResults=100';
const API_KEY = '&key=AIzaSyBTdg-w9-f1kmhSfZJEEzkBGqr3JV6ymY8';
const FIELD = '&fields=items(replies(comments(snippet(authorChannelId,authorDisplayName,likeCount,publishedAt,textDisplay))),snippet(topLevelComment(snippet(authorChannelId,authorDisplayName,likeCount,publishedAt,textDisplay)),totalReplyCount)),nextPageToken,pageInfo';
const VIDEO_ID = '&videoId=';
const PAGE_TOKEN = '&pageToken=';
const QUERIES = `${COMMENT_THREADS}${PART}${ORDER}${TEXT_FORMAT}${MAX_RESULTS}${FIELD}${API_KEY}`;

const youtubeCall = axios.create({
  baseURL: `${BASE_URL}`
});

class CommentCollector extends Component {
  state = {
    videoId: 'https://www.youtube.com/watch?v=826y8Bi1k9k',
    nextPage: null,
    totalCount: 0,
    commentCount: 0,
    repliesCount: 0,
    commentData: [],
    fetched: false,
    error: null
  }

  handleSubmit = () => {
    let replyCount = 0;

    this.setState({
      nextPage: null,
      totalCount: 0,
      commentCount: 0,
      repliesCount: 0,
      commentData: [],
      fetched: false
    });

    const getComment = async (videoId, nextPage) => {
      try {
        const response = await youtubeCall.get(`${QUERIES}${VIDEO_ID + videoId}${!!nextPage ? PAGE_TOKEN + nextPage : ''}`);
        if (response.data.nextPageToken) {
          this.setState({
            commentData: this.state.commentData.concat(response.data.items),
            nextPage: response.data.nextPageToken
          });

          return getComment(videoId, this.state.nextPage);

        } else {
          this.setState({
            commentData: this.state.commentData.concat(response.data.items),
            nextPage: null
          });
        }

        this.state.commentData.map((item) => {
          return replyCount += item.snippet.totalReplyCount
        });

        this.setState({
          totalCount: this.state.commentData.length + replyCount,
          commentCount: this.state.commentData.length,
          repliesCount: replyCount,
          fetched: true
        });
      } catch (e) {
        alert(e);
      }
    }

    let abbrVideoId = '';

    if (!this.state.videoId) {
      return false;
    } else {
      try {
        abbrVideoId = this.state.videoId.split('=')[1];
      } catch (e) {
        alert(e);
      }
    }

    getComment(abbrVideoId, this.state.nextPage);
  }

  onInputChange(value) {
    this.setState({
      videoId: value
    });
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
              <label className="col-form-label col-lg-2" htmlFor="videoId">유투브 URL : </label>
              <div className="col-lg-10">
                <div className="input-group">
                  <input type="text" name="videoId" id="videoId" className="form-control" value={this.state.videoId} onChange={e => this.onInputChange(e.target.value)} placeholder="https://www.youtube.com/watch?v=sampleURL" />
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
            this.state.commentData.length !== 0 && this.state.fetched !== false &&
            <CommentCollectorDataTable commentData={this.state.commentData} dataTableBasic={this.props.dataTableBasic} fetched={this.state.fetched} />
          }
          {/* /Datatable */}

        </div>
      </div>
    );
  }
};

export default CommentCollector;
