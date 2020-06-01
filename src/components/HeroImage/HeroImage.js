//React core
import React from "react";
//CSS
import "./hero-image.scss";

const HeroImage = (props) => {
  const HEROBG = require(`../../assets/images/hero-images/${props.heroImage}.jpg`);
  const HEROBGSTYLE = {
    backgroundImage: `url("${HEROBG}")`,
  };
  let heroText, heroTextLink;
  switch (props.lang) {
    case "english":
      heroText = "The best personal training, right in your own home";
      heroTextLink = "Join Ifit Coach";
      break;
    case "español":
      heroText = "El mejor entrenamiento personal, justo en tu propia casa.";
      heroTextLink = "Únete al entrenador IFIT";
      break;
    default:
      heroText = "The best personal training, right in your own home";
      heroTextLink = "Join Ifit Coach";
  }
  return (
    <div className="app__hero-image">
      <section style={HEROBGSTYLE} className="app__hero-image-textbox">
        <h1 className="app__hero-image-text">{heroText}</h1>
        <a href="/join-ifit" className="app__hero-image-button">
          {heroTextLink}
        </a>
      </section>
    </div>
  );
};

export default HeroImage;
