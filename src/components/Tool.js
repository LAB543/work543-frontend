import React from 'react';

const Tool = (props) => {
  return(
    <div>
      Tool Component {props.match.params.id}
    </div>
  );
};

export default Tool;
