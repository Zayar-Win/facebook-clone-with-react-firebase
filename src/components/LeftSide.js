import React from "react";
import "./LeftSide.css";
import SidebarOption from "./SidebarOption";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCardIcon from "@mui/icons-material/AddCard";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import FlagIcon from "@mui/icons-material/Flag";
import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

function LeftSide() {
  const data = useSelector(
    (state) => state.userState.user
  );
  const { displayName, photoURL } = data;
  return (
    <div className='left__side'>
      {/* sidebar option */}
      <SidebarOption
        title={displayName}
        Icon={Avatar}
        name='user'
        src={photoURL}
      />
      <SidebarOption
        title='friends'
        Icon={GroupIcon}
        name='friends'
      />
      <SidebarOption
        title='Saved'
        Icon={BookmarkIcon}
        name='Saved'
      />
      <SidebarOption
        title='Events'
        Icon={AddCardIcon}
        name='Events'
      />
      <SidebarOption
        title='Groups'
        Icon={GroupsIcon}
        name='Groups'
      />
      <SidebarOption
        title='Watch'
        Icon={OndemandVideoIcon}
        name='Watch'
      />
      <SidebarOption
        title='Memory'
        Icon={QueryBuilderIcon}
        name='Memory'
      />
      <SidebarOption
        title='Pages'
        Icon={FlagIcon}
        name='Pages'
      />
      <SidebarOption
        title='Show more'
        Icon={ExpandMoreIcon}
        name='showmore  '
      />
    </div>
  );
}

export default LeftSide;
