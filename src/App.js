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
  const backgroundImageStyle = {
    backgroundRepeat: 'inherit',
    backgroundImage: 'url(' + backgroundImageUrl + ')'
  }
  const currentMenuItem = currentData[0].title
  console.log('! here are some vars...', currentData);

  return (
    <div className="App"
        style={backgroundImageStyle}>
        <LayoutUI
          setCurrentPage={setCurrentPage}
          data={data}
          currentMenuItem={currentMenuItem}
        />
        <PageUI data={currentData}/>
    </div>
  );
}

export default App;
