//React core
import React from "react";
//SCSS
import "./product-grid-item.scss";

function ProductGridItem(props) {
  const logoImg = props.img ? props.img : "";
  return (
    <div className="app__product-grid-item">
      <a href={props.link}>
        <img
          src={require(`../../assets/images/product-grid-item-images/${logoImg}`)}
          alt={props.alt}
        />
      </a>
      <p className="app__product-grid-item-text">
        {props[`text-${props.lang}`]}
      </p>
    </div>
  );
}

export default ProductGridItem;
