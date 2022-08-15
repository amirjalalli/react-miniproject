import React from "react";
import "./Menu.css";

const Categories = ({ categorie, filterItem }) => {
  return (
    <div className="btn-container">
      {categorie.map((item, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
