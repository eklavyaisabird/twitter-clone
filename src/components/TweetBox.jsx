import React, { useState } from "react";
import "./TweetBox.css";
import Avatar from "react-avatar";
import db from "../firebase";

function TweetBox({username, url, interests}) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: username,
      userName: username,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: url,
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            size={80}
            round={true}
            src={url}
          />
          <input
            placeholder="What's happening?"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        />

        <button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetBox;
