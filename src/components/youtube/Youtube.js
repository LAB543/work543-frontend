import React from 'react';
import {_cardActionCollapse, _cardActionRemove, _cardActionReload} from '../../utils';
import '../../assets/js/jquery.blockUI';

// Child Component
import CommentCollector from "./CommentCollector";

const Youtube = (props) => {

  const Components = {
    'comment-collector': CommentCollector,
  };

  const Tool = Components[props.match.params.tool];

  return (
    <Tool
      cardCollapse={_cardActionCollapse}
      cardRemove={_cardActionRemove}
      cardReload={_cardActionReload}
    />
  );
};

export default Youtube;
