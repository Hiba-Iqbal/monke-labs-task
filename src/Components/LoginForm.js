import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions";
import users from "../data/users";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        dispatch(login(user.username));
        setUsername("");
        setPassword("");
        setError("");
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("Please enter a valid username and password");
    }
  };

  return (
    <form className="hei login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
