//React core
import React from "react";
//CSS
import "./hero-image.scss";

function HeroImage(props) {
  const HEROBG = require(`../../assets/images/hero-images/${props.heroImage}.jpg`);
  const HEROBGSTYLE = {
    backgroundImage: `url("${HEROBG}")`,
  };
  return (
    <div className="app__hero-image">
      <div style={HEROBGSTYLE} className="app__hero-image-textbox">
        <h1 className="app__hero-image-text">
          The best personal training, right in your own home
        </h1>
        <a href="/join-ifit" className="app__hero-image-button">
          Join Ifit Coach
        </a>
      </div>
    </div>
  );
}

export default HeroImage;
