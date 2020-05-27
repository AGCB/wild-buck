import React from 'react';
import Headline from './Headline.js'
import Subhead from './Subhead.js';
import Calltoaction from './Calltoaction.js';
import './page-ui.css';

function PageUI({data}) {
  return (
    <div className="page-ui">
      <div className="headline-subhead">
        <Headline headline={data[0].blocks[0].headline}/>
        <Subhead subhead={data[0].blocks[0].subhead}/>
      </div>
      <Calltoaction cta={data[0].blocks[0].cta}/>
    </div>
  )
}

export default PageUI;
