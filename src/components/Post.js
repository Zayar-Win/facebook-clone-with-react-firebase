import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

function Post({
  displayName,
  photo,
  timestamp,
  description,
  photoURL,
}) {
  return (
    <div className='posts'>
      <div className='postheader'>
        <div className='postheader__left'>
          <Avatar src={photoURL} />
          <div className='postheader__leftInfo'>
            <p>{displayName}</p>
            <span>
              {timestamp?.toDate().toUTCString()}
            </span>
          </div>
        </div>
        <div className='postheader__right'>
          <MoreHorizIcon />
        </div>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='image'>
        <img src={photo} alt='' />
      </div>
      <div className='desicion'>
        <div>
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>
        <div>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div>
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
