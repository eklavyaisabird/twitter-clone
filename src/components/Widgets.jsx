import React from "react";
import "./Widgets.css";

function Widgets({list}) {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <input placeholder="Search" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Interests:</h2>
      </div>
      <div>
        {/* Here be interests */}

      <ul className="list-group">
        {list.map((item) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Widgets;
