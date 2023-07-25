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

  // Using the custom hook to manage the interest state
  const { interest, setInterest } = useInterestState();

    const [selectedInterest, setSelectedInterest] = useState('');


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
      />
      <Widgets
        list={list}
        onSelect={({ selectedItem }) => {
          setSelectedInterest(selectedItem);
          console.log('INTEREST SELECTED: ', selectedInterest, selectedItem, interest);
        }}
        onInterestClick={handleInterestClick} // Pass the callback function to the Widgets component
      />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <Create
          onSubmit={({ username, url, interests }) => {
            setUsername(username);
            setUrl(url);
            setInterests(interests.match(/\b(\w+)\b/g));
            setList(interests.match(/\b(\w+)\b/g));
            console.log("OKURRRRY", { username, url, interests, list });
            console.log("LIST MAYBE??:", interests.match(/\b(\w+)\b/g));
          }}
        />
      </Popup>
    </div>
  );
}

export default App;


// import React from "react";
// import "./App.css";
// import Feed from "./components/Feed";
// import Sidebar from "./components/Sidebar";
// import {Widgets} from "./components/Widgets";
// import Popup from "./components/Popup"
// import Create from './Create';
// import { useEffect, useState} from 'react';
// import { useInterestState } from "./components/Widgets";

// function App() {
//   const [timedPopup, setTimedPopup] = useState(false);
//   const [username, setUsername] = useState('');  
//   const [url, setUrl] = useState('');
//   const [interests, setInterests] = useState([]);
//   const [list, setList] = useState([]);

//   // const [selectedInterest, setSelectedInterest] = useState('');

//   const { interest, setInterest } = useInterestState();
//   const [selectedInterest, setSelectedInterest] = useState('');

//   useEffect(() => {
//     setTimeout(()=>{
//       setTimedPopup(true);
//     }, 0);
//   }, []);

//   useEffect(() => {
//     setSelectedInterest(interest); // Set the selectedInterest state to the exported interest state
//   }, [interest]);

//   useEffect(() => {
//     console.log("INTEREST SELECTED (in App.jsx): ", selectedInterest, interest);
//   }, [selectedInterest, interest]);

//     // Callback function to update the interest state
//     const handleInterestClick = (item) => {
//       setInterest(item);
//     };

//   return (
//     <div className="app">
//       <Sidebar />
//       <Feed username={username} url={url} interests={interests} selectedInterest={interest}/>
//       <Widgets
//         list={list}
//         onSelect={({ selectedItem }) => {
//           setSelectedInterest(selectedItem);
//           setInterest(selectedItem)
//             handleInterestClick(selectedItem); // Pass the callback function to the Widgets component
          
//           console.log('INTEREST SELECTED: ', selectedInterest, selectedItem, interest);
//         }}
//       />      
//       <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
//       <Create onSubmit={({ username, url, interests }) => {
//           setUsername(username);
//           setUrl(url);
//           setInterests(interests.match(/\b(\w+)\b/g));
//           setList(interests.match(/\b(\w+)\b/g));
//           console.log("OKURRRRY", { username, url, interests, list })
//           console.log("LIST MAYBE??:", interests.match(/\b(\w+)\b/g))
//         }} />
//       </Popup>
//     </div>
//   );
// }

// export default App;
