import React from 'react'
import { useState } from "react";

const Create = ({onSubmit}) => {
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [interests, setInterests] = useState('');

  const [created, setCreated] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refreshing the page on submit
    setCreated(true);
    const accountDetails = { username, email };
    const userInterests = { interests }
    console.log(accountDetails);
    console.log(userInterests);
    onSubmit({ username, url, interests }); // Pass the data to the callback prop

  }
  
  return (
    <div className="create">
        <h2> Create Your Account </h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="password"
                required
            />
            <label>Email:</label>
            <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Avatar (url):</label>
            <input
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            ></input>
            <label>Enter 3 of your interests:</label>
            <textarea
                required
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
            ></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Create