//React core
import React from "react";
//custom components
import ProductGridItem from "../ProductGridItem/ProductGridItem";
//JSON
import productItems from "../../constants/product-grid-items.json";
//SCSS
import "./product-grid.scss";

const ProductGrid = (props) => {
  const PRODUCTS = productItems["products"];
  let productText;
  switch (props.lang) {
    case "english":
      productText = "Interested in our exciting iFit-enabled equipment?";
      break;
    case "español":
      productText =
        "¿Interesado en nuestro emocionante equipo habilitado para iFit?";
      break;
    default:
      productText = "Interested in our exciting iFit-enabled equipment?";
  }
  return (
    <>
      <h2 className="app__product-grid-header">{productText}</h2>
      <div className="app__product-grid">
        {PRODUCTS.map((product, i) => {
          return (
            <ProductGridItem lang={props.lang} key={`post-${i}`} {...product} />
          );
        })}
      </div>
    </>
  );
};

export default ProductGrid;
