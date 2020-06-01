//React core
import React from "react";
//SCSS
import "./product-grid-item.scss";

const ProductGridItem = (props) => {
  const logoImg = props.img ? props.img : "";
  return (
    <div className="app__product-grid-item">
      <figure>
        <a href={props.link}>
          <img
            className="app__product-grid-item-image"
            src={require(`../../assets/images/product-grid-item-images/${logoImg}`)}
            alt={props.alt}
          />
        </a>
        <figcaption className="app__product-grid-item-text">
          {props[`text-${props.lang}`]}
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductGridItem;
