import React from 'react';


function RenderMenuItem ({dish, onClick}){
  return(
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
          onClick={() => onClick(dish.id)}
        >
          {dish.name}
        </h1>
      </div>
    </div>
  )
}

const Menu = (props) => {
  const menuList = props.dishes.map((dish) =>{
    return (
      <RenderMenuItem dish = {dish} onClick={props.onClick} />
    );
  });
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Dishes</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {menuList}
        </div>          
      </div>
    </div>
  );
}


export default Menu;
