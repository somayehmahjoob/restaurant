import React, { Component } from 'react'


export class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Uthappizza",
          image: "assets/images/irina.jpg",
          category: "mains",
          label: "Hot",
          price: "4.99",
          description:
            "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
        },
        {
          id: 1,
          name: "Zucchipakoda",
          image: "assets/images/nogada.jpg",
          category: "appetizer",
          label: "",
          price: "1.99",
          description:
            "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
        },
        {
          id: 2,
          name: "Vadonut",
          image: "assets/images/toa-heftiba.jpg",
          category: "appetizer",
          label: "New",
          price: "1.99",
          description:
            "A quintessential ConFusion experience, is it a vada or is it a donut?",
        },
        {
          id: 3,
          name: "ElaiCheese Cake",
          image: "assets/images/wesual.jpg",
          category: "dessert",
          label: "",
          price: "2.99",
          description:
            "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
        },
      ],
    };
  }
  render() {
    const menuList = this.state.dishes.map((dish)=>{
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
