//React core
import React from "react";
//custom components
import ProductGridItem from "../ProductGridItem/ProductGridItem";
//jSON
import productItems from "../../constants/product-grid-items.json";
//SCSS
import "./product-grid.scss";

function ProductGrid(props) {
  const PRODUCTS = productItems["products"];
  return (
    <>
      <h2 className="app__product-grid-header">
        Interested in our exciting iFit-enabled equipment?
      </h2>
      <div className="app__product-grid">
        {Object.values(PRODUCTS).map((product, i) => {
          return (
            <ProductGridItem lang={props.lang} key={`post-${i}`} {...product} />
          );
        })}
      </div>
    </>
  );
}

export default ProductGrid;
