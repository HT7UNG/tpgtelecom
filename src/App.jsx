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
      <SignIn users={users} />
      <div className="fake-forget">Forgotten password?</div>
      <SignUp users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
