import React, { Component } from 'react';
import Menu from "./MenuComponent";
import Navbar from "./NavbarComponent";
import SlideShow from "./SlideShowComponent";
import { DISHES } from "../shared/dishes";
import Dishdetails from './DishdetailsComponent';
import Footer from './FooterComponent';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Navbar />
        <SlideShow />
        <Menu
          dishes ={this.state.dishes}
          onClick ={(dishId) => this.onDishSelect(dishId)}
        />
        <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}
