import React from "react";

const FriendsList = (props) => {
  return (
    <div className="friendsList">
      <h1>All of our friends!</h1>
      {/* <div className="cardContainer">
        {props.members.map((data) => (
          <div className="card" key={data.id}>
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Age: {data.age}</h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FriendsList;
