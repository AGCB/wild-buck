import React from 'react';
import './page-ui.css';

function Calltoaction({cta}) {
  return (
    <div className="call-to-action">
      <span>{cta}</span>
      <div className="lets-talk-wrapper">
        <span>LET'S TALK.</span>
        <span className="right-arrow"></span>
        <span
          aria-label="lets talk button"
          role="img"
          style={{"color":"#ffc001"}}
        >➡️</span>
      </div>
    </div>
  )
}

export default Calltoaction;
