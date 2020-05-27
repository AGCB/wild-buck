import React from 'react';
import LayoutUI from './components/LayoutUI/LayoutUI.js';
import PageUI from './components/PageUI/PageUI.js';
import data from './data.js';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = React.useState("Industries")
  const currentData = data.pages.filter(page => page.title === currentPage);
  const currentBackgroundImageName = currentData[0].blocks[0].background;
  const backgroundImageUrl = `/images/backgrounds/${currentBackgroundImageName}`;
  var divStyle = {
            backgroundImage: 'url(' + backgroundImageUrl + ')'
        }
  return (
    <div className="App"
        style={divStyle}>
        <LayoutUI
          setCurrentPage={setCurrentPage}
          data={data}/>
        <PageUI data={currentData}/>
    </div>
  );
}

export default App;
