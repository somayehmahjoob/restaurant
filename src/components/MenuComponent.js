import React, { Component } from 'react'


export class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    const menuList = this.props.dishes.map((dish) =>{
      return (
        <div
          key={dish.id}
          className="flex flex-wrap shadow-md rounded-md mt-5"
        >
          <div className="sm:w-full md:w-1/2 lg:w-1/3">
            <img src={dish.image} alt={dish.name} className="" />
          </div>
          <div className="sm:w-full md:w-1/2 lg:w-2/3 text-left p-5">
            <div className="md:text-3xl font-bold sm:text-2xl mb-2">{dish.name}</div>
            <div className="md:text-xl sm:text-lg text-gray-500 sm:text-justify">{dish.description}</div>
          </div>
        </div>
      );
    })
    return (
      <div className="container mt-2">
        <div className="flex justify-start items-center">
          <div className="p-2 m-2">
            {menuList}
          </div>
          
        </div>
      </div>
    );
  }
}

export default MenuComponent
