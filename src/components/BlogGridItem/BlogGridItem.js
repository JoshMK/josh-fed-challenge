//React core
import React from "react";
//SCSS
import "./blog-grid-item.scss";

function BlogGridItem(props) {
  const logoImg = props.img ? props.img : "";
  return (
    <div className="app__blog-grid-item">
      <img
        src={require(`../../assets/images/blog-grid-item-images/${logoImg}`)}
        alt=""
      />
      <p>{props["text-en"]}</p>
    </div>
  );
}

export default BlogGridItem;
