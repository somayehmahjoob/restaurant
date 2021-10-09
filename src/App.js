import React from 'react';
import './App.css';
import MenuComponent from './components/MenuComponent';
import NavbarComponent from './components/NavbarComponent';
import SlideShowComponent from './components/SlideShowComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <SlideShowComponent />
      <MenuComponent />
    </div>
  );
}

export default App;
