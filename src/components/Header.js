import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { Avatar, Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { signout } from "../redux/actions";

function Header() {
  const data = useSelector(
    (state) => state.userState.user
  );

  const { displayName, photoURL } = data;

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png'
          alt=''
        />
        <form>
          <div className='search__box'>
            <label>
              <SearchIcon />
            </label>
            <input
              type='text'
              placeholder='Search on Facebook'
            />
          </div>
        </form>
      </div>
      <div className='header__center'>
        <div className='middle__group active'>
          <HomeIcon />
        </div>
        <div className='middle__group'>
          <OndemandVideoOutlinedIcon />
        </div>
        <div className='middle__group'>
          <GroupsIcon />
        </div>
        <div className='middle__group'>
          <AllInboxIcon />
        </div>
      </div>
      <div className='header__right'>
        <div className='user__info'>
          <Avatar
            className='user__profile'
            src={photoURL}
          />
          <p>{displayName}</p>
        </div>
        <div className='bg__icon'>
          <AppsIcon />
        </div>
        <div className='bg__icon'>
          <NotificationsIcon />
        </div>
        <div className='bg__icon'>
          <ExpandMoreIcon />
        </div>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default Header;
