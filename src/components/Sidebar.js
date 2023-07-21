import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <div> :)</div>
      {/*sidebar option */}
      <SidebarOption active text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Profile" />
      <SidebarOption text="More" />
      <button className="sidebar__tweet">Tweet</button>
    </div>
  );
}

export default Sidebar;
