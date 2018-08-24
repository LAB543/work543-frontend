import React from 'react';
import {_cardActionCollapse, _cardActionRemove, _cardActionReload} from '../../utils';
import { DatatableBasic } from '../../utils/dataTable';
import '../../assets/js/jquery.blockUI';

// Child Component
import PostCollector from "./PostCollector";
import TagCollector from "./TagCollector";
import AccountMonitor from "./AccountMonitor";

const Instagram = (props) => {

  const Components = {
    'post-collector': PostCollector,
    'tag-collector': TagCollector,
    'account-monitor': AccountMonitor
  };

  const Tool = Components[props.match.params.tool];

  return (
    <Tool
      cardCollapse={_cardActionCollapse}
      cardRemove={_cardActionRemove}
      cardReload={_cardActionReload}
      dataTableBasic={DatatableBasic}
    />
  );

};

export default Instagram;
