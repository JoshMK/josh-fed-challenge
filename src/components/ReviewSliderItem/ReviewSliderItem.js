//React core
import React from "react";
//SCSS
import "./review-slider-item.scss";

function ReviewSliderItem(props) {
  const logoImg = props.logo ? props.logo : "";
  return (
    <div className="app__review-slider-item">
      <img
        src={require(`../../assets/images/review-slider-item-images/${logoImg}`)}
        alt=""
      />
      <p>{props["text-en"]}</p>
    </div>
  );
}

export default ReviewSliderItem;
