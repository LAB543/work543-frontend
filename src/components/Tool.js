import React from 'react';
import Sidebar from './Sidebar';

const Tool = (props) => {
  return(
    <div>
      Tool Component {props.match.params.id}
    </div>
  );
};

export default Tool;
