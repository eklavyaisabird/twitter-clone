import React from "react";
import "./TweetBox.css";
import Avatar from "react-avatar";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            size={80}
            round={true}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0csE2mYaNIg7qh444OjfQ1AquRYwwrCFF0bvYFgXvrgQNXbi4X5jTulMiy8-LSGt4WwQ&usqp=CAU"
          />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />

        <button className="tweetBox__tweetButton">Tweet</button>
      </form>
    </div>
  );
}

export default TweetBox;
