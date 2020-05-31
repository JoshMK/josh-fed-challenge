//React core
import React from "react";
//custom components
import BlogGridItem from "../BlogGridItem/BlogGridItem";
//jSON
import blogItems from "../../constants/blog-grid-items.json";
//SCSS
import "./blog-grid.scss";

const BLOGPOSTS = blogItems["posts"];

function BlogGrid(props) {
  return (
    <div className="app__blog-grid">
      {Object.values(BLOGPOSTS).map((post, i) => {
        return <BlogGridItem lang={props.lang} key={`post-${i}`} {...post} />;
      })}
    </div>
  );
}

export default BlogGrid;
