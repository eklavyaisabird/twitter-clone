import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";
import checkTweet from "../checkRelevance";

function Feed({ username, url, interests, selectedInterest, created }) {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);


  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // sets filtered post list when selected interest is updated and not empty
  useEffect(() => {
    setFilteredPosts(posts.map(post => {
       checkTweet(post.text, selectedInterest).then(result => {
        if (result) {
          return post
        }
      }
      )
    }))
    // posts.map((post) => (
    //   // condition && ...
    //   created && (selectedInterest != "") && checkTweet(post.text, selectedInterest).then(result => {
    //     if (result) {
    //       console.log("This tweet is relevant to the interest!")
    //     }
  }, [selectedInterest]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

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

      {/* if selectedInterest is empty: render unfiltered post list
      else: render filtered post list */}
      {
      (selectedInterest != "") ?
// unfiltered posts
      posts.map((post) => (
        // condition && ...
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      )) :
      // filtered posts
      filteredPosts.map((post) => (
        // condition && ...
          <Post
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />) 
      )}
      {/* {posts.map((post) => (
        // condition && ...
        created && (selectedInterest != "") && checkTweet(post.text, selectedInterest).then(result => {
          if (result) {
            console.log("This tweet is relevant to the interest!")
          }
          result &&
          <Post
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />}) 
      ))} */}
      {/* {posts.map((post) => (
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
      ))} */}
    </div>
  );
}

export default Feed;
