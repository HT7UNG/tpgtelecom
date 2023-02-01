import React, { useState } from "react";

const SignUp = ({ setUsers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [ageRange, setAgeRange] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      // Show an error message if passwords don't match
      alert("Passwords do not match");
      return;
    }
    if (email && password && fullName && ageRange) {
      console.log("Success");
      const newUser = { email, password };
      setUsers((users) => [...users, newUser]);
    } else {
      console.log("Fail");
    }
    // Add logic to submit the form data to the server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Re-type password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fullName">Full name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ageRange">Age range:</label>
        <select
          id="ageRange"
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
        >
          <option value="">Select one</option>
          <option value="-18"> -18</option>
          <option value="18-24">18-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55+">55+</option>
        </select>
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
