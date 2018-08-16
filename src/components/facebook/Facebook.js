import React from 'react';

import CommentCollector from './CommentCollector';
import PostMonitor from './PostMonitor';

const Facebook = (props) => {

  const Components = {
    'comment-collector': CommentCollector,
    'post-monitor': PostMonitor
  };

  const Tool = Components[props.match.params.tool];

  return (
    <Tool/>
  );

};

export default Facebook;
