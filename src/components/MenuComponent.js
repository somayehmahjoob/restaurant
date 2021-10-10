import React, { Component } from 'react'


export class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({selectedDish: dish});
  }

  renderDish(dish) {
    if(dish != null){
      return (
        <div className="flex">
          <div className="flex-1">
            <img src={dish.image} alt={dish.name} className="w-full" />
          </div>
          <div className="flex-1 p-4 text-left">
            <h1 className="text-gray-900 font-extrabold mb-2 text-3xl">{dish.name}</h1>
            <span className="text-gray-600 block mb-4 text-xl">{dish.category}</span>
            <p className="text-gray-800 font-justify text-2xl">{dish.description}</p>
          </div>
        </div>
      );
    }
    else{
      return(
        <div></div>
      )
    }
  }
  render() {
    const menuList = this.props.dishes.map((dish) =>{
      return (
        <div
          key={dish.id}
          className="w-full aspect-w-1 aspect-h-1 bg-gray-900 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
        >
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-56 object-center object-cover  hover:opacity-75"
          />
          <div className="flex items-center px-6 py-3 bg-gray-900">
            <h1
              className="mx-3 text-lg font-bold text-white cursor-pointer"
              onClick={() => this.onDishSelect(dish)}
            >
              {dish.name}
            </h1>
          </div>
        </div>
      );
    })
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Dishes</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {menuList}
          </div>
          <div className="mt-8">{this.renderDish(this.state.selectedDish)}</div>
        </div>
      </div>
    );
  }
}

export default MenuComponent
