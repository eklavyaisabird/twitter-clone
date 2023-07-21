import React, { useState } from "react";
import "./TweetBox.css";
import Avatar from "react-avatar";
import db from "../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "eklavya",
      userName: "eklavyaisabird",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0csE2mYaNIg7qh444OjfQ1AquRYwwrCFF0bvYFgXvrgQNXbi4X5jTulMiy8-LSGt4WwQ&usqp=CAU",
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            size={80}
            round={true}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0csE2mYaNIg7qh444OjfQ1AquRYwwrCFF0bvYFgXvrgQNXbi4X5jTulMiy8-LSGt4WwQ&usqp=CAU"
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
