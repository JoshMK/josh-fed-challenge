//React core
import React, { Component } from "react";
//custom components
import ReviewSliderItem from "../ReviewSliderItem/ReviewSliderItem";
//jSON
import reviews from "../../constants/review-slider-items.json";
//SCSS
import "./review-slider.scss";

const REVIEWSLIDES = reviews["reviews"];

class ReviewSlider extends Component {
  state = {
    index: 0,
    maxIndex: REVIEWSLIDES.length,
  };
  //scrollReviews - cycle reviews slider item based on button press/enter
  scrollReviews = (e, dir = "left") => {
    console.log(e);
    //left scroll
    if (dir === "left") {
      if (this.state.index === 0) {
        this.setState({
          index: this.state.maxIndex,
        });
      } else {
        this.setState((prevState) => ({
          ...prevState,
          index: prevState.index - 1,
        }));
      }
    }
    //right scroll
    else if (dir === "right") {
      if (this.state.index === this.state.maxIndex) {
        this.setState({
          index: 0,
        });
      } else {
        this.setState((prevState) => ({
          ...prevState,
          index: prevState.index + 1,
        }));
      }
    }
  };
  render() {
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
          <span className="app__sr-only">Scroll left</span>
        </button>
        <div className="app__review-slider-container">
          {REVIEWSLIDES.map((slide, i) => {
            return (
              <ReviewSliderItem
                lang={this.props.lang}
                key={`slide-${i}`}
                {...slide}
                ariaHidden={this.state.index === i ? "false" : "true"}
                translateY={this.state.index * 184}
              />
            );
          })}
        </div>
        <button
          onClick={(e) => this.scrollReviews(e, "right")}
          className="app__review-slider-container-scroller app__review-slider-container-scroller--right"
          style={BUTTONBGSTYLE}
        >
          <span className="app__sr-only">Scroll right</span>
        </button>
      </div>
    );
  }
}

export default ReviewSlider;
