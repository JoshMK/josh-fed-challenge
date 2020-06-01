//React core
import React, { Component } from "react";
//custom components
import ReviewSliderItem from "../ReviewSliderItem/ReviewSliderItem";
//jSON
import reviews from "../../constants/review-slider-items.json";
//SCSS
import "./review-slider.scss";

class ReviewSlider extends Component {
  state = {
    index: 0,
  };
  //scroll reviews - cycle reviews based on button press/enter
  scrollReviews = (e, dir = "left") => {
    console.log(e);
  };
  render() {
    const REVIEWSLIDES = reviews["reviews"];
    const BUTTONBG = require("../../assets/images/review-slider-item-images/scroll.png");
    const BUTTONBGSTYLE = {
      backgroundImage: `url("${BUTTONBG}")`,
    };
    return (
      <div className="app__review-slider">
        <button
          onClick={(e) => this.scrollReviews(e, "left")}
          className="app__review-slider-container-scroller"
          style={BUTTONBGSTYLE}
        >
          <span class="app__sr-only">Scroll left</span>
        </button>
        <div className="app__review-slider-container">
          {REVIEWSLIDES.map((slide, i) => {
            return (
              <ReviewSliderItem
                lang={this.props.lang}
                key={`slide-${i}`}
                {...slide}
              />
            );
          })}
        </div>
        <button
          className="app__review-slider-container-scroller app__review-slider-container-scroller--right"
          style={BUTTONBGSTYLE}
        >
          <span class="app__sr-only">Scroll right</span>
        </button>
      </div>
    );
  }
}

export default ReviewSlider;
