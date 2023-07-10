import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage } from "../redux/actions";

const MessageList = () => {
  const messages = useSelector((state) => state.messages);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const [displayAll, setDisplayAll] = useState(false);

  const handleDeleteMessage = (messageId) => {
    dispatch(deleteMessage(messageId));
  };

  const handleViewAll = () => {
    setDisplayAll(true);
  };

  const handleViewLess = () => {
    setDisplayAll(false);
  };

  const formatTimestamp = (timestamp) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Date(timestamp).toLocaleString(undefined, options);
  };

  const filteredMessages = displayAll ? messages : messages.slice(-5);

  return (
    <div className="message-list">
      {filteredMessages.map((message) => (
        <div key={message.id} className="message">
          <span className="username">{message.username === username ? username : message.username}:</span>
          <span className="content">{message.text}</span>
          <span className="timestamp">
            {formatTimestamp(message.timestamp)}
          </span>
          <button
            className="delete-button"
            onClick={() => handleDeleteMessage(message.id)}
          >
            Delete
          </button>
        </div>
      ))}
      {messages.length > 5 && (
        <div className="view-buttons">
          {!displayAll ? (
            <button className="view-all-button" onClick={handleViewAll}>
              View All
            </button>
          ) : (
            <button className="view-less-button" onClick={handleViewLess}>
              View Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MessageList;
