import React from "react";

const Category = (props) => {
const {icon, categoryName, score} = props;

  return (
    <li><img src={icon} alt="category-icon"/> {categoryName} {score}/100</li>
  );
};

export default Category;