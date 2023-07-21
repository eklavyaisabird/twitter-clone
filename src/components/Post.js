import React from "react";
import Avatar from "react-avatar";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import "./Post.css";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar size={50} round={true} src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <BsFillEmojiSmileFill className="post__badge" />} @
                {userName}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Post;
