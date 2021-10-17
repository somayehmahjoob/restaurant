import React, { Component } from "react";

export default class Dishdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDishDetails: this.props.Dishdetails,
      
    };
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="container px-0 py-24 mx-auto text-left">
          <div className="lg:w-4/5 mx-0 flex flex-wrap">
            <img
              alt={dish.name}
              src={dish.image}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 pt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {dish.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {dish.name}
              </h1>
              <p className ="leading-relaxed">{dish.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    if (comments == null) {
      return <div></div>;
    }
    const commentForDish = comments.map((comment) => { 
      return (
        <div className="flex items-start mb-5" key={comment.id}>
          <div className="flex-shrink-0">
            <div className="inline-block relative">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                  src="https://picsum.photos/id/646/200/200"
                  alt="Profile"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
              </div>
              <svg
                className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
              </svg>
            </div>
          </div>
          <div className="xl:ml-6 ml-3">
            <p className="flex items-baseline text-left">
              <span className="text-gray-600 font-extrabold md:font-bold">
                {comment.author}
              </span>
              <span className="mh-2 ml-2 text-green-600 text-xs">
                {" "}
                {new Intl.DateTimeFormat("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(comment.date))}{" "}
              </span>
            </p>
            <div className="flex items-center mt-1">
              <svg
                class="w-4 h-4 fill-current text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <svg
                class="w-4 h-4 fill-current text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <div className="mt-3 mb-3 text-gray-700 text-left">
              <span className="font-bold">{comment.title} </span>
              <p className="mt-1">{comment.comment}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="mt-5 border rounded shadow-md">
        <div className="bg-gray-800 text-white font-extrabold py-5 rounded-t-md bg-cover">
          Comments
        </div>
        <div className="mt-2 p-4">{commentForDish}</div>
      </div>
    );
  }
  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    return (
      <>
        <section className ="body-font overflow-hidden">
          {this.renderDish(dish)}
        </section>
        <section className ="body-font overflow-hidden">
          {this.renderComments(dish.comments)}
        </section>
      </>
    );
  }
}
