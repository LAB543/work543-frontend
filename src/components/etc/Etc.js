import React from 'react';

import PrivacyMasking from './PrivacyMasking';

const Etc = (props) => {

  const Components = {
    'privacy-masking': PrivacyMasking
  };

  const Tool = Components[props.match.params.tool];

  return (
    <Tool/>
  );
};

export default Etc;
