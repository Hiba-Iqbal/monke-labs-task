import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions";

const Header = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1 className="header-logo">Chat Room</h1>
      {loggedIn && (
        <div className="header-navigation">
          <span>Welcome, {username}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
