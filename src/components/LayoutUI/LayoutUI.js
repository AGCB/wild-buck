import React from 'react';
import Logo from './Logo.js';
import Menu from './Menu.js';

function LayoutUI({data,currentMenuItem,setCurrentPage}) {
  return (
    <div className="layout-ui">
      <div className="layout-ui-left">
        <Logo />
        <Menu
          currentMenuItem={currentMenuItem}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="layout-ui-right">
        <div className="contact-us-button">
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  )
}

export default LayoutUI;
