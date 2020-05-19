import React from "react";
import "./App.css";
import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import CreateAccount from "./Components/CreateAccount";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Join the friends list!</h1>
        <div className="navLinks">
          <Link to="/">Login</Link>
          <Link to="/createaccount">Create Profile</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/createaccount" component={CreateAccount} />
        <PrivateRoute path="/protected" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
