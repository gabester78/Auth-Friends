import React from "react";
import axios from "axios";

const CreateAccount = () => {
  return (
    <div>
      <h1>Create your profile!</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          name="name"
          // onChange={handleChanges}
          // value={newMembers.name}
        />

        <br></br>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          name="email"
          // onChange={handleChanges}
          // value={newMembers.email}
        />

        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="text"
          name="age"
          // onChange={handleChanges}
          // value={newMembers.email}
        />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default CreateAccount;
