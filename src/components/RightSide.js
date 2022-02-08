import React from "react";
import "./RightSide.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FriendChat from "./FriendChat";

function RightSide() {
  return (
    <div className='right__side'>
      <div className='body'>
        <div className='right__sideHeader'>
          <h4>Contacts</h4>
          <div className='header__right'>
            <div>
              <SearchIcon />
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
        <FriendChat />
      </div>
    </div>
  );
}

export default RightSide;
