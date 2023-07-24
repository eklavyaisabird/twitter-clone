import React from 'react'
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');  
  const [body, setBody] = useState('');
  const [interests, setInterests] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refreshing the page on submit
    const accountDetails = { title, body };
    console.log(accountDetails);

  }
  
  return (
    <div className="create">
        <h2> Create Your Account </h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="text"
                required
            />
            <label>Email:</label>
            <input
                type="text"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></input>
            <label>Enter 3 of your interests:</label>
            <textarea
                required
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
            ></textarea>
            <button>Submit</button>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ interests }</p>
        </form>
    </div>
  )
}

export default Create