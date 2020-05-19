import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/login`, this.state.credentials)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h3>Login to see all our friends!</h3>
        <form onSubmit={this.login}>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.credentials.username}
            />
          </label>

          <br></br>

          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.credentials.password}
            />
          </label>
          <br></br>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
