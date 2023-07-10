export const register = (email, username, password) => {
  return {
    type: "REGISTER",
    payload: {
      username,
      email,
      password,
    },
  };
};

export const login = (username) => {
  return {
    type: "LOGIN",
    payload: {
      username,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const addMessage = (text) => {
  return {
    type: "ADD_MESSAGE",
    payload: {
      text,
      timestamp: Date.now(),
    },
  };
};

export const deleteMessage = (messageId) => {
  return {
    type: "DELETE_MESSAGE",
    payload: messageId,
  };
};
