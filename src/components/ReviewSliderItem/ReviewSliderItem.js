//React core
import React, { Component } from "react";
//SCSS
import "./review-slider-item.scss";

const ReviewSliderItem = (props) => {
  const logoImg = props.logo ? props.logo : "";
  return (
    <div className="app__review-slider-item">
      <img
        src={require(`../../assets/images/review-slider-item-images/${logoImg}`)}
        alt={props.alt}
      />
      <p className="app__review-slider-item-text">{`"${
        props[`text-${props.lang}`]
      }"`}</p>
    </div>
  );
};

export default ReviewSliderItem;
