const initialState = {
  loggedIn: false,
  username: "",
  email: "",
  messages: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        username: "",
      };
    case "ADD_MESSAGE":
      const newMessage = {
        id: state.messages.length + 1,
        username: state.username,
        text: action.payload.text,
        timestamp: action.payload.timestamp,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
