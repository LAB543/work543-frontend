import React, { Component } from 'react';

class TagCollectorDataTable extends Component {
  componentDidMount() {
    this.props.dataTableBasic.init();
  }

  componentWillUnmount() {
    const dataTable = $('.datatable-basic').DataTable();
    dataTable.destroy();
  }

  render() {
    const { tagData } = this.props;
    return (
      <table className="table datatable-basic">
        <colgroup>
          <col style={{width: '10%'}}/>
          <col />
          <col style={{width: '10%'}}/>
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>TAG</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
        {
          // eslint-disable-next-line
          tagData.map((item, i) => {
            return (
              <tr key={item.hashtag.name+i}>
                <td>{item.position}</td>
                <td>{item.hashtag.name}</td>
                <td>{item.hashtag.media_count}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }
}

export default TagCollectorDataTable;
