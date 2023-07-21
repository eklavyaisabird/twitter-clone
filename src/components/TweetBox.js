import React from 'react'
import './TweetBox.css'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
        <input placeholder="What's happening?" type="text" />
        </div>
        <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />

        <button className='tweetBox__tweetButton'>Tweet</button>
        </form>
    </div>
  )
}

export default TweetBox