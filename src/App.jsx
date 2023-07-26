// App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import { Widgets, useInterestState } from "./components/Widgets";
import Popup from "./components/Popup";
import Create from "./Create";

function App() {
  const [timedPopup, setTimedPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [url, setUrl] = useState("");
  const [interests, setInterests] = useState([]);
  const [list, setList] = useState([]);

  const [created, setCreated] = useState(false);


  // Using the custom hook to manage the interest state
  const { interest, setInterest } = useInterestState();

  const [selectedInterest, setSelectedInterest] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 0);
  }, []);

  useEffect(() => {
    console.log("INTEREST SELECTED (in App.jsx): ", interest);
  }, [interest]);

  // Callback function to update the interest state
  const handleInterestClick = (item) => {
    setInterest(item);
  };

  return (
    <div className="app">
      <Sidebar />
      <Feed
        username={username}
        url={url}
        interests={interests}
        selectedInterest={interest}
        created={created}
      />
      <Widgets
        list={list}
        onSelect={({ selectedItem }) => {
          setSelectedInterest(selectedItem);
          console.log(
            "INTEREST SELECTED: ",
            selectedInterest,
            selectedItem,
            interest
          );
        }}
        onInterestClick={handleInterestClick} // Pass the callback function to the Widgets component
      />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <Create
          onSubmit={({ username, url, interests, created }) => {
            setUsername(username);
            setUrl(url);
            setInterests(interests.match(/\b(\w+)\b/g));
            setList(interests.match(/\b(\w+)\b/g));
            setCreated(true)
            console.log("OKURRRRY", { username, url, interests, list });
            console.log("LIST MAYBE??:", interests.match(/\b(\w+)\b/g));
          }}
        />
      </Popup>
    </div>
  );
}

export default App;
