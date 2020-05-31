//React core
import React from "react";
//CSS
import "./header.scss";

function Header() {
  return (
    <header>
      <nav aria-label="Primary">
        <div className="app__header">
          <a href="" className="app__header-link">
            Blog
          </a>
          <a href="" className="app__header-link">
            Nourish
          </a>
          <a href="" className="app__header-link">
            Shop
          </a>
        </div>
        <div className="app__header-subheader">
          <a href="" className="app__header-subheader-link">
            Excercise
          </a>
          <a href="" className="app__header-subheader-link">
            Nutrition
          </a>
          <a href="" className="app__header-subheader-link">
            Activity
          </a>
          <a href="" className="app__header-subheader-link">
            Sleep
          </a>
          <a href="" className="app__header-subheader-button">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
