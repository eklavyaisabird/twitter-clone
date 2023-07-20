import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import {Button} from 'bootstrap'


function Sidebar() {
  return (
      <>
    <div className='sidebar'>
        Twitter Icon Here

    </div>
    {/*sidebar option */}
    <SidebarOption active text="Home"/>
    <SidebarOption text="Explore"/>
    <SidebarOption text="Profile"/>
    <SidebarOption text="More"/>
    <button className='sidebar__tweet' fullWidth>Tweet</button>
    </>
  )
}

export default Sidebar