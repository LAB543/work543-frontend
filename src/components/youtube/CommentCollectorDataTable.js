import React, { Component } from 'react';

class CommentCollectorDataTable extends Component {
  componentDidMount() {
    this.props.dataTableBasic.init();
  }

  componentWillUnmount() {
    const dataTable = $('.datatable-basic').DataTable();
    dataTable.destroy();
  }

  render() {
    const { commentData } = this.props;
    return (
      <table className="table datatable-basic">
        <thead>
          <tr>
            <th>Like</th>
            <th>Name</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Reply</th>
          </tr>
        </thead>
        <tbody>
          {
          // eslint-disable-next-line
          commentData.map((item, index) => {
              if (item.snippet.totalReplyCount === 0) {
                return (
                  <tr key={item.snippet.topLevelComment.snippet.authorDisplayName + index}>
                    <td>{item.snippet.topLevelComment.snippet.likeCount}</td>
                    <td>{item.snippet.topLevelComment.snippet.authorDisplayName}</td>
                    <td>{item.snippet.topLevelComment.snippet.textDisplay}</td>
                    <td>{item.snippet.topLevelComment.snippet.publishedAt}</td>
                    <td><span className="badge badge-danger">{item.snippet.totalReplyCount}</span></td>
                  </tr>
                );
              } else {
                item.replies.comments.map((reply) => (
                  <tr key={reply.snippet.authorDisplayName + index}>
                    <td>{reply.snippet.likeCount}</td>
                    <td>{reply.snippet.authorChannelId.value}</td>
                    <td>{reply.snippet.authorDisplayName}</td>
                    <td>{reply.snippet.textDisplay}</td>
                    <td>{reply.snippet.publishedAt}</td>
                    <td><span className="badge badge-secondary">Reply</span></td>
                  </tr>
                ))
              }
            })
          }
        </tbody>
      </table>
    );
  }
}

export default CommentCollectorDataTable;
