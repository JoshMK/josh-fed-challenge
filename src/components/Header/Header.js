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
        <ul className="app__header-list">
          {PRIMARYNAV.map((item) => {
            return (
              <li className="app__header-list-item">
                <a href={item.link} className="app__header-link">
                  {item[`text-${props.lang}`]}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav aria-label="Secondary" className="app__header-subheader">
        <ul className="app__header-subheader-list">
          {SECONDARYNAV.map((item) => {
            return (
              <li>
                <a href={item.link} className="app__header-subheader-link">
                  {item[`text-${props.lang}`]}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
