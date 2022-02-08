import React, { useState } from "react";
import "./PostModalBox.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Avatar } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { uploadImageToStorage } from "../redux/actions";
import { serverTimestamp } from "firebase/firestore";

function PostModalBox({ setPostboxActive }) {
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const [description, setDescription] =
    useState("");

  const data = useSelector(
    (state) => state.userState.user
  );
  const { displayName, photoURL } = data;

  const getPhoto = (e) => {
    let file = e.target.files[0];
    if (file) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/gif"
      ) {
        setPhoto(file);
      } else {
        alert("Your file is not valid photo");
        setPhoto("");
        return;
      }
    }
  };

  const post = (e) => {
    e.preventDefault();
    const aboutPost = {
      image: photo,
      user: data,
      description,
      timestamp: serverTimestamp(),
    };
    dispatch(uploadImageToStorage(aboutPost));
    setPostboxActive(false);
    setPhoto("");
    setDescription("");
  };

  const clearBoxModal = (e) => {
    e.preventDefault();
    setPostboxActive(false);
    setPhoto("");
    setDescription("");
  };

  return (
    <div className='postmodalbox'>
      <div className='box'>
        <div className='box__header'>
          <p>Post</p>
          <HighlightOffIcon
            onClick={clearBoxModal}
          />
        </div>
        <div className='box__body'>
          <div className='box__userInfo'>
            <Avatar src={photoURL} />
            <div className='userInfo'>
              <p>{displayName}</p>
            </div>
          </div>
          <div className='postInput'>
            <textarea
              type='text'
              placeholder={`What are you thinking?...${displayName}`}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </div>
          <div className='postOption'>
            <p>In your post</p>
            <div className='option'>
              <div className='photo'>
                <input
                  type='file'
                  id='file'
                  onChange={getPhoto}
                />
                <label htmlFor='file'>
                  <AddToPhotosIcon />
                </label>
              </div>
              <div className='group'>
                <GroupAddIcon />
              </div>
              <div className='emoji'>
                <InsertEmoticonIcon />
              </div>
              <div className='location'>
                <LocationOnIcon />
              </div>
              <div className='mic'>
                <MicExternalOnIcon />
              </div>
              <div className='more'>
                <MoreHorizIcon />
              </div>
            </div>
          </div>
          <button onClick={post}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default PostModalBox;
