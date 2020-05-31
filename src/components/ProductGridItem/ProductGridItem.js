//React core
import React from "react";
//SCSS
import "./product-grid-item.scss";

function ProductGridItem(props) {
  const logoImg = props.img ? props.img : "";
  return (
    <div className="app__product-grid-item">
      <img
        src={require(`../../assets/images/product-grid-item-images/${logoImg}`)}
        alt=""
      />
      <p>{props[`text-${props.lang}`]}</p>
    </div>
  );
}

export default ProductGridItem;
