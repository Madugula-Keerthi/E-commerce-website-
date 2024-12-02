import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Category.css";

const categories = [
  {
    id: 1,
    name: "Fruits",
    path: "/fruit",
    bgColor: "rgb(140, 217, 125)",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8625mUfk5SOV9FG8vVGMK_68PTvYuT90hZQ&s",
  },
  {
    id: 2,
    name: "Vegetables",
    path: "/vegetables",
    bgColor: "green",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB1gNCBZMY3rn2eU6BTQdnFGJjFZ8OLMusnA&s",
  },
  {
    id: 3,
    name: "Dairy Products",
    path: "/dairyproducts",
    bgColor: "babypink",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P_XZAGY5eVnXZibM5FE5F9ZYrVMEqTBzSQ&s",
    fontSize: "40px",
  },
  {
    id: 4,
    name: "Cool Drinks",
    path: "/cooldrinks",
    bgColor: "rgb(223,170,170)",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZWqmaf1l_U_WZPr7SXT0ZerIh0okmA3n7Q&s",
    fontSize: "40px",
  },
  {
    id: 5,
    name: "Meat",
    path: "/meat",
    bgColor: "rgb(230,200,255)",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvACZGHNjKTt4E7y7osDAac9lSndHxiP9nQ&s",
  },
  {
    id: 6,
    name: "Snacks",
    path: "/snacks",
    bgColor: "rgb(181, 174, 174)",
    imgSrc: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
  },
  {
    id: 7,
    name: "Pantry",
    path: "/pantry",
    bgColor: "rgb(253,225,124)",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIeOKqt4_Mh8z3WkPWX1rg5HYrryc-FA56A&s",
  },
];

const Category = () => {
  return (
    <div className="main">
      {categories.map((category) => (
        <Link key={category.id} to={category.path} className="link">
          <div
            className="container"
            style={{ backgroundColor: category.bgColor }}
          >
            <img
              src={category.imgSrc}
              height="150px"
              width="150px"
              alt={category.name}
            />
            <b style={category.fontSize ? { fontSize: category.fontSize } : {}}>
              {category.name}
            </b>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
