import Header from "./Components/Header";
import MessageInput from "./Components/MessageInput";
import MessageList from "./Components/MessageList";
import "./style/style.css";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.loggedIn);

  return (
    <div>
      <Header />
      {loggedIn ? (
        <div className="chat-room">
          <MessageList />
          <MessageInput />
        </div>
      ) : (
        <div className="auth-container">
          <LoginForm />
          <RegisterForm />
        </div>
      )}
    </div>
  );
}

export default App;
