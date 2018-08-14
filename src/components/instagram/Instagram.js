import React from 'react';

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

    return(
        <Tool />
    );

};

export default Instagram;
