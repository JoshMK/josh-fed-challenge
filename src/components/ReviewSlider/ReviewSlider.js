//React core
import React from "react";
//custom components
import ReviewSliderItem from "../ReviewSliderItem/ReviewSliderItem";
//jSON
import reviews from "../../constants/review-slider-items.json";
//SCSS
import "./review-slider.scss";

const REVIEWSLIDES = reviews["reviews"];

const ReviewSlider = (props) => {
  return (
    <div className="app__review-slider">
      {REVIEWSLIDES.map((slide, i) => {
        return (
          <ReviewSliderItem lang={props.lang} key={`slide-${i}`} {...slide} />
        );
      })}
    </div>
  );
};

export default ReviewSlider;
