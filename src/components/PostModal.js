import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./PostModal.css";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PostModalBox from "./PostModalBox";
import { useSelector } from "react-redux";

function PostModal() {
  const [postboxActive, setPostboxActive] =
    useState(false);

  const openPostBoxModal = (e) => {
    e.preventDefault();
    setPostboxActive(true);
  };

  const data = useSelector(
    (state) => state.userState.user
  );
  const { displayName, photoURL } = data;

  return (
    <>
      <div className='postmodal'>
        <div className='post'>
          <Avatar src={photoURL} />
          <button onClick={openPostBoxModal}>
            {`What are you thinking ${displayName}?`}
          </button>
        </div>
        <div className='icons'>
          <div className='icon live'>
            <VideoCameraFrontIcon />
            <p>Live</p>
          </div>
          <div className='icon photo'>
            <AddToPhotosIcon />
            <p>Photo/video</p>
          </div>
          <div className='icon emogi'>
            <InsertEmoticonIcon />
            <p>Feeling/Action</p>
          </div>
        </div>
      </div>
      {postboxActive && (
        <PostModalBox
          setPostboxActive={setPostboxActive}
        />
      )}
    </>
  );
}

export default PostModal;
