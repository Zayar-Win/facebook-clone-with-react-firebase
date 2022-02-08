import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { googleAuth } from "../redux/actions";

function Login() {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(googleAuth());
  };
  return (
    <div className='login'>
      <div className='logincard'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png'
          alt=''
        />
        <h4>Welcome from joke Facebook-clone.</h4>
        <p>You can login with google.</p>
        <Button onClick={signInWithGoogle}>
          Login with google
        </Button>
      </div>
    </div>
  );
}

export default Login;
