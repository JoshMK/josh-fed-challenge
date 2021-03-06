//React core
import React from "react";
//SCSS
import "./review-slider-item.scss";

const ReviewSliderItem = (props) => {
  const LOGOIMG = props.logo ? props.logo : "";
  const TRANSLATEY = {
    transform: `translateY(-${props.translateY}px)`,
  };
  return (
    <div
      className="app__review-slider-item"
      aria-hidden={props.ariaHidden}
      style={TRANSLATEY}
    >
      <img
        src={require(`../../assets/images/review-slider-item-images/${LOGOIMG}`)}
        alt={props.alt}
      />
      <p className="app__review-slider-item-text">{`"${
        props[`text-${props.lang}`]
      }"`}</p>
    </div>
  );
};

export default ReviewSliderItem;
