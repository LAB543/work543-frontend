import React from 'react';
import {_cardActionCollapse, _cardActionRemove, _cardActionReload} from '../../utils';
import '../../assets/js/jquery.blockUI';

// Child Component
import PrivacyMasking from './PrivacyMasking';

const Etc = (props) => {

  const Components = {
    'privacy-masking': PrivacyMasking
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

export default Etc;
