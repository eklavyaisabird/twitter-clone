import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Popup from "./components/Popup"
import Create from './Create';
import { useEffect, useState} from 'react';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);
  const [username, setUsername] = useState('');  
  const [url, setUrl] = useState('');
  const [interests, setInterests] = useState([]);
  const [list, setList] = useState([]);


  useEffect(() => {
    setTimeout(()=>{
      setTimedPopup(true);
    }, 0);
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Feed username={username} url={url} interests={interests} />
      <Widgets list={list}/>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
      <Create onSubmit={({ username, url, interests }) => {
          setUsername(username);
          setUrl(url);
          setInterests(interests.match(/\b(\w+)\b/g));
          setList(interests.match(/\b(\w+)\b/g));
          console.log("OKURRRRY", { username, url, interests, list })
          console.log("LIST MAYBE??:", interests.match(/\b(\w+)\b/g))
        }} />
      </Popup>
    </div>
  );
}

export default App;
