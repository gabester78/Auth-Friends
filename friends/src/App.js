import React from "react";
import "./App.css";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import CreateAccount from "./Components/CreateAccount";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1>Welcome friends! Join the list!</h1>
        <Link to="/">
          <p>Login</p>
        </Link>
        <Link to="/createaccount">
          <p>Create Profile</p>
        </Link>
      </nav>
      <Route exact path="/" component={Login} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/friendslist" component={FriendsList} />
    </div>
  );
};

export default App;
