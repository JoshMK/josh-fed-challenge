//React core
import React from "react";
//SCSS
import "./language-picker.scss";

function LanguagePicker(props) {
  return (
    <div className="app__language-picker">
      <form action="">
        <span className="app__sr-only">
          <label htmlFor="language-picker-select">Select your language</label>
        </span>
        <select
          className="app__language-picker-select"
          name="language-picker-select"
          id="language-picker-select"
          onChange={(e) => props.changeAppLanguage(e)}
        >
          <option lang="en" value="english" defaultValue="english">
            English
          </option>
          <option lang="es" value="español">
            Español
          </option>
        </select>
      </form>
    </div>
  );
}

export default LanguagePicker;
