import React from "react";
import Avatar from "react-avatar";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import "./Post.css";

function Post(displayName, userName, verified, text, image, avatar) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          size={50}
          round={true}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0csE2mYaNIg7qh444OjfQ1AquRYwwrCFF0bvYFgXvrgQNXbi4X5jTulMiy8-LSGt4WwQ&usqp=CAU"
        />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Eklavya Mishra{" "}
              <span className="post__headerSpecial">
                <BsFillEmojiSmileFill className="post__badge" /> @eklavya
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>*Insert controversial statement here*</p>
          </div>
        </div>
        <img
          src="https://betanews.com/wp-content/uploads/2018/06/gifs-on-cli.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default Post;
