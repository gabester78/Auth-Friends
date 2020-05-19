import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    friends: {
      name: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Login to see all our friends!</h3>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.friends.name}
          />

          <br></br>

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.friends.name}
          />
        </form>
        <button>Submit</button>
      </div>
    );
  }
}

export default Login;
