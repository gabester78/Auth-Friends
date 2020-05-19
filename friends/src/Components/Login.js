import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
    axiosWithAuth()
      .post(`/api/login`, this.state.credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/protected");
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
