import React, { Component } from 'react';
import Home from "../pages";
import contact from '../pages/contact';
import Menu from "./MenuComponent";
import Navbar from "./NavbarComponent";
import { DISHES } from "../shared/dishes";
// import Dishdetails from './DishdetailsComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router';


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
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.state.dishes}
                onClick ={(dishId) => this.onDishSelect(dishId)}
              />
            )}
          />
          <Route exact path="/contact" component={contact} />
          {/* <Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
