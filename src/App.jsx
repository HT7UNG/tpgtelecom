import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    {
      email: "user1@gmail.com",
      password: "12345678",
    },
    {
      email: "user2@gmail.com",
      password: "012345678",
    },
  ]);

  return (
    <div className="App">
      <SignUp handleSignUp={setUsers} users={users} />
      <SignIn users={users} />
    </div>
  );
};

export default App;
