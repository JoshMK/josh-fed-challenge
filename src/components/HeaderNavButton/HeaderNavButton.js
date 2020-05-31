//React core components
import React from "react";
//css
import "./header-nav-button.scss";
//component
const NavMenuButton = (props) => {
  return (
    <button
      className="app__header-nav-button"
      aria-expanded={props.mobileMenuToggled ? "true" : "false"}
      onClick={props.toggleMobileMenu}
    >
      <span className="app__sr-only">Menu</span>
      <span className="app__header-nav-button-line" aria-hidden="true"></span>
      <span className="app__header-nav-button-line" aria-hidden="true"></span>
      <span className="app__header-nav-button-line" aria-hidden="true"></span>
    </button>
  );
};

export default NavMenuButton;
