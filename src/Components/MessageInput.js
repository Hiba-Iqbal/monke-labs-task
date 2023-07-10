import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/actions";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const loggedInUsername = useSelector((state) => state.username);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== "") {
      dispatch(addMessage(message));
      setMessage("");
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
