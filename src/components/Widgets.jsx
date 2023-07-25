import { AlbertForSequenceClassification } from "@xenova/transformers";
import React, { useState } from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import InterestButton from "./InterestButton";
import "./Widgets.css";

function Widgets({list}) {
  // console.log("IS LIST NORMAL?", list)

  const [interest, setInterest] = useState("")

  const handleClick = (item) => {
    console.log("INTEREST SELECTED!!!", item);
    setInterest(item)
  }

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
      <li>
        {list.map((item) => (
          <>
            <InterestButton 
            onChoose={() => handleClick(item)} text={item} />
            {/* <button 
            onClick={() => {
              console.log("INTEREST SELECTED!!! hee hee")
            }} text={item} >{item}</button> */}
            {/* <InterestButton 
            onChoose={() => {
              console.log("ITS ALIVE!!! ITS ALIIIIIVE!!!!!");
              console.log("INTEREST SELECTED!!!", item);
    setInterest(item)
              }} text={item} /> */}
          </>
        ))}
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Widgets;
