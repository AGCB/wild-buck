import React from 'react';
import './page-ui.css';

function Headline({headline}) {
  return (
    <div className="headline">
      <span>{headline}</span>
    </div>
  )
}

export default Headline;
