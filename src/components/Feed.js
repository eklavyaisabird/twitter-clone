import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweetbox */}
      <TweetBox />
      {/* Posts */}
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}

export default Feed;
