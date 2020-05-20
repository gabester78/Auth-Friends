import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
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
    this.setState({
      isLoading: true,
    });
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
    const transition = {
      rotate: {
        loop: Infinity,
        ease: "linear",
        duration: 5,
      },
      scale: {
        duration: 0.5,
      },
    };

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
          <button>Submit</button>
          {this.state.isLoading && (
            <div>
              <Loader type="Grid" color="#00BFFF" height={80} width={80} />
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
