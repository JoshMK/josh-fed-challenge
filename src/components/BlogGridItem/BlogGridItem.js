//React core
import React from "react";
//SCSS
import "./product-grid-item.scss";

function ProductGridItem(props) {
  return (
    <div className="app__product-grid-item">
      <img
        src={require(`../../assets/images/review-slider-item-logos/${logoImg}`)}
        alt=""
      />
      <p>{props["text-en"]}</p>
    </div>
  );
}

export default ProductGridItem;
