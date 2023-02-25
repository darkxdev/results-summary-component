import React from "react";

const Category = (props) => {
  const { icon, categoryName, score, bgColor, textColor } = props;

  return (
    <li style={{ backgroundColor: bgColor, color: textColor }}>
      <div>
        <img src={icon} alt="category-icon" />
        <h4>{categoryName}</h4>
      </div>
      <p><span>{score}</span> /100</p>
    </li>
  );
};

export default Category;