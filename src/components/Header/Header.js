//React core
import React from "react";
//custom components
import HeaderNavButton from "../HeaderNavButton/HeaderNavButton";
//JSON
import headerNavItems from "../../constants/header-nav-items.json";
//SCSS
import "./header.scss";

const Header = (props) => {
  const PRIMARYNAV = headerNavItems["primary-navigation"];
  const SECONDARYNAV = headerNavItems["secondary-navigation"];
  return (
    <header>
      <nav
        aria-label="Primary"
        className={`app__header${
          props.headerScroll ? " app__header--scroll" : ""
        }`}
      >
        <ul className="app__header-list">
          {PRIMARYNAV.map((item) => {
            return (
              <li key={item.link} className="app__header-list-item">
                <a href={`/${item.link}`} className="app__header-link">
                  {item[`text-${props.lang}`]}
                </a>
              </li>
            );
          })}
        </ul>
        <HeaderNavButton {...props} />
      </nav>
      <nav
        aria-label="Secondary"
        className={`app__header-subheader${
          !props.mobileMenuToggled && props.isMobile
            ? " app__header-subheader--hidden"
            : ""
        }`}
      >
        <ul className="app__header-subheader-list">
          {SECONDARYNAV.map((item) => {
            return (
              <li className="app__header-subheader-list-item" key={item.link}>
                <a
                  href={`/${item.link}`}
                  className="app__header-subheader-link"
                >
                  {item[`text-${props.lang}`]}
                </a>
              </li>
            );
          })}
          <li className="app__header-subheader-list-item">
            <a className="app__header-subheader-button" href="/sign-up">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
