import React from 'react'
import './TweetBox.css'

function TweetBox() {
  return (
    <div>
        <input
            placeholder="What's happening?"
            type="text"
          />
          <input
            placeholder="Enter image URL"
            type="text"
          />
    </div>
  )
}

export default TweetBox