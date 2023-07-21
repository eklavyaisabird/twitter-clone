import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <input placeholder="Search" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Parameters :)</h2>
      </div>
    </div>
  );
}

export default Widgets;
