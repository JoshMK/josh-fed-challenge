//React core
import React from "react";
//JSON
import headerNavItems from "../../constants/header-nav-items.json";
//SCSS
import "./header.scss";

function Header(props) {
  const PRIMARYNAV = headerNavItems["primary-navigation"];
  const SECONDARYNAV = headerNavItems["secondary-navigation"];
  return (
    <header>
      <nav aria-label="Primary" className="app__header">
        {PRIMARYNAV.map((item) => {
          return (
            <a href={item.link} className="app__header-link">
              {item[`text-${props.lang}`]}
            </a>
          );
        })}
      </nav>
      <nav aria-label="Secondary" className="app__header-subheader">
        {SECONDARYNAV.map((item) => {
          return (
            <a href={item.link} className="app__header-subheader-link">
              {item[`text-${props.lang}`]}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
