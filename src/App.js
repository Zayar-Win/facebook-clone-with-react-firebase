import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FeedTemplate from "./components/FeedTemplate";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { getUserLoginOrNot } from "./redux/actions/index";

function App() {
  const data = useSelector(
    (state) => state.userState
  );
  const dispatch = useDispatch();
  const { user } = data;

  useEffect(() => {
    dispatch(getUserLoginOrNot());
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          {/* Header */}
          <Header />
          <Router>
            <Routes>
              <Route
                path='/'
                element={<FeedTemplate />}
              />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
