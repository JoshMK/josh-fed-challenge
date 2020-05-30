//React core
import React from "react";
//CSS
import "./hero-image.scss";

function HeroImage() {
  return (
    <div className="app__hero-image">
      <div className="app__hero-image-textbox">
        <h1 className="app__hero-image-text">
          The best personal training, right in your own home
        </h1>
        <a href="" className="app__hero-image-button">
          Join Ifit Coach
        </a>
      </div>
    </div>
  );
}

export default HeroImage;