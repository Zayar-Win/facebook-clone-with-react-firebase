import { Avatar } from "@mui/material";
import React from "react";
import "./SingleStory.css";

function SingleStroy() {
  return (
    <div className='singlestory'>
      <img
        src='https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'
        alt=''
      />
      <Avatar className='image' />
      <div className='user__name'>
        <p>Zayarwin</p>
      </div>
    </div>
  );
}

export default SingleStroy;
