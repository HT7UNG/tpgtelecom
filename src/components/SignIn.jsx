import React, { useState } from "react";

const SignIn = (users) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users.users);
    // Add logic for submitting the form
    //check if in users
    if (
      users.users.some(
        //clean up later - destructure?
        (elem) => elem.email === email && elem.password === password
      )
    ) {
      console.log("Success");
    } else {
      console.log("Fail");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
