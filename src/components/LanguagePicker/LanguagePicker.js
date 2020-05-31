//React core
import React from "react";
//SCSS
import "./language-picker.scss";

function LanguagePicker(props) {
  return (
    <div class="app__language-picker">
      <form action="">
        <span className="app__sr-only">
          <label for="language-picker-select">Select your language</label>
        </span>
        <select
          className="app__language-picker-select"
          name="language-picker-select"
          id="language-picker-select"
          onChange={(e) => props.changeAppLanguage(e)}
        >
          <option lang="en" value="english" selected>
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
