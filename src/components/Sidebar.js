import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div>Twitter Icon Here :)</div>
    {/*sidebar option */}
    <SidebarOption active text="Home"/>
    <SidebarOption text="Explore"/>
    <SidebarOption text="Profile"/>
    <SidebarOption text="More"/>
    <button className='sidebar__tweet' fullWidth>Tweet</button>
    </div>
  )
}

export default Sidebar