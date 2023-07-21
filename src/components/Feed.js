import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* tweetbox */}
      <TweetBox />
      {/* Posts */}
      <Post
        displayName="eklavya"
        userName="eklavyaisabird"
        verified
        text="*insert controversial opinion here*"
        image="https://betanews.com/wp-content/uploads/2018/06/gifs-on-cli.gif"
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0csE2mYaNIg7qh444OjfQ1AquRYwwrCFF0bvYFgXvrgQNXbi4X5jTulMiy8-LSGt4WwQ&usqp=CAU"
      />
    </div>
  );
}

export default Feed;
