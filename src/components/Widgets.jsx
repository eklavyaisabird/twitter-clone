// Widgets.jsx

import React, { useState } from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import InterestButton from "./InterestButton";
import checkTweet from "../checkRelevance";
import "./Widgets.css";

const useInterestState = () => {
  const [interest, setInterest] = useState('');

  return { interest, setInterest };
};

function Widgets({ list, onSelect, onInterestClick }) {
  const { interest, setInterest } = useInterestState();

  const handleClick = (item) => {
    setInterest(item);
    onInterestClick(item); // Call the onInterestClick callback function to update the interest state in the parent component
    onSelect({ interest: item });
    console.log('INTEREST SELECTED!!! (in widgets)', item, interest);
  };

  const handleClear = () => {
    setInterest("");
    onInterestClick(""); // Call the onInterestClick callback function to update the interest state in the parent component
    onSelect({ interest: "" });
    console.log('INTEREST CLEARED!!! (in widgets)');
  };


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
                <InterestButton
                  active={(item === interest)}
                  onChoose={() => handleClick(item)}
                  text={item}
                />
              </li>
            ))}
            <InterestButton
                  onChoose={() => {
                    console.log("cleared!!")
                    handleClick("")}}
                  text={"clear"}
                />
          </ul>
        
      </div>
    </div>
  );
}

export {Widgets, useInterestState};