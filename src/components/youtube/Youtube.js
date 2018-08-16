import React from 'react';

import CommentCollector from "./CommentCollector";

const Youtube = (props) => {

  const Components = {
    'comment-collector': CommentCollector,
  };

  const Tool = Components[props.match.params.tool];

  return (
    <Tool/>
  );
};

export default Youtube;
