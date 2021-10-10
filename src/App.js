import React, { Component } from 'react';
import './App.css';
import MenuComponent from './components/MenuComponent';
import NavbarComponent from './components/NavbarComponent';
import SlideShowComponent from './components/SlideShowComponent';
import { DISHES } from './shared/dishes';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }
  render(){
    return (
      <div className="App">
        <NavbarComponent />
        <SlideShowComponent />
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
  
}

export default App;
