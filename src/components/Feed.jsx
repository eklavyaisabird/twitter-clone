import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";

import { pipeline } from "@xenova/transformers";

// async function classifier() {
//   let classifier = await pipeline(
//     "zero-shot-classification",
//     "facebook/bart-large-mnli"
//   );
// }
// from transformers import pipeline
// classifier = pipeline("zero-shot-classification",
//                       model="facebook/bart-large-mnli")

// try using this instead: https://huggingface.co/docs/huggingface.js/main/en/inference/README

function Feed({ username, url, interests, selectedInterest }) {
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
      <TweetBox
        username={username}
        url={url}
        interests={interests}
      />
      <p>Selected Interest: {selectedInterest}</p>
      {/* Posts */}
      {/* here, only display post if it meets condition */}
      {posts.map((post) => (
        // condition && ...
        post.text.includes(selectedInterest) &&
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
