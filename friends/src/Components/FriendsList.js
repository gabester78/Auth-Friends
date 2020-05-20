import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

class FriendsList extends React.Component {
  state = {
    friends: [],
    name: "",
    email: "",
    age: "",
    id: Date.now(),
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then((response) => {
        // console.log(response.data, "friends res");
        this.setState({
          friends: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends/", {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        id: this.state.id,
      })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      name: "",
      email: "",
      age: "",
    });
  };

  componentDidUpdate() {
    this.getData();
  }

  render() {
    return (
      <div>
        <div>
          <h3>Add your name to our friends!</h3>
          <form onSubmit={this.addFriend}>
            <label htmlFor="name">
              Name:
              <input
                id="name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) =>
                  this.setState({
                    name: e.target.value,
                  })
                }
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
            </label>

            <label htmlFor="age">
              Age:
              <input
                id="age"
                type="text"
                name="age"
                value={this.state.age}
                onChange={(e) =>
                  this.setState({
                    age: e.target.value,
                  })
                }
              />
            </label>

            <button>Submit</button>
          </form>
        </div>

        <div className="friendsList">
          <h1>All of our friends!</h1>
          <div className="cardContainer">
            {this.state.friends.map((data) => (
              <div className="card" key={data.id}>
                <h4>Name: {data.name}</h4>
                <p>Email: {data.email}</p>
                <p>Age: {data.age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsList;
