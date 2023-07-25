import React, { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Popup from "./components/Popup"
import Create from './Create';
import { useEffect, useState} from 'react';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setTimedPopup(true);
    }, 0);
  }, []);
  const [preferences, setPreferences] = useState(["sports"]);

  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <Create />
          
      </Popup>
    </div>
  );
}

export default App;
