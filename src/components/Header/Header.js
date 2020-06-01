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
    <header
      className={`app__header${
        props.headerScroll ? " app__header--scroll" : ""
      }`}
    >
      <nav aria-label="Primary" className={"app__header-nav"}>
        <ul className="app__header-nav-list">
          {PRIMARYNAV.map((item) => {
            return (
              <li key={item.link} className="app__header-nav-list-item">
                <a href={`/${item.link}`} className="app__header-nav-link">
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
        className={`app__header-nav-subheader${
          !props.mobileMenuToggled && props.isMobile
            ? " app__header-nav-subheader--hidden"
            : ""
        }`}
      >
        <div className="app__header-logo">
          <a href="https://www.ifit.com/" className="app__header-logo-link">
            <img
              src={require("../../assets/images/header-images/ifit-logo.png")}
              alt="iFit"
            />
          </a>
        </div>
        <ul className="app__header-nav-subheader-list">
          {SECONDARYNAV.map((item) => {
            return (
              <li
                className="app__header-nav-subheader-list-item"
                key={item.link}
              >
                <a
                  href={`/${item.link}`}
                  className="app__header-nav-subheader-link"
                >
                  {item[`text-${props.lang}`]}
                </a>
              </li>
            );
          })}
          <li className="app__header-nav-subheader-list-item">
            <a className="app__header-nav-subheader-button" href="/sign-up">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
