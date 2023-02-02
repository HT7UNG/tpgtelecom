import React, { useState } from "react";

const SignIn = ({ users }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting the form

    //check if in users
    if (
      users.some((elem) => elem.email === email && elem.password === password)
    ) {
      alert("Sign in Successful");
    } else {
      alert("Sign in failed");
    }
  };

  return (
    <form className="signin" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
