import React from "react";
import "./FeedTemplate.css";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";

function FeedTemplate() {
  return (
    <div className='app__body'>
      {/* left side */}
      <LeftSide />
      {/* middle side */}
      <MiddleSide />
      {/* right side */}
      <RightSide />
    </div>
  );
}

export default FeedTemplate;
