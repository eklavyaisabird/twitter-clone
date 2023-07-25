import React from "react";
import "./SidebarOption.css";

interface Props {
  active: boolean;
  text: string;
  onChoose: () => void;
}

function InterestButton({ active, text, onChoose }: Props) {
  return (
    <button
      type="button"
      onClick={onChoose}
      className={`sidebarOption ${active && "sidebarOption--active"}`}
    >
      <h2>{text}</h2>
    </button>
  );
}

export default InterestButton;
