import React from 'react';
import './layout-ui.css';
import data from '../../data.js';

function Menu({setCurrentPage}) {
  return (
    <div className="menu">
      {
        data.pages.map((page,i) => {
          return (
            <span
              key={i}
              onClick={e => setCurrentPage(page.title)}
              >{page.title}</span>
          )
        })
      }
    </div>
  )
}

export default Menu;
