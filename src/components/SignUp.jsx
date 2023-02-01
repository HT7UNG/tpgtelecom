import React, { useState } from "react";

const SignUp = ({ setUsers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    ageRange: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation here
    // Submit form data to backend here
    if (formData.password !== formData.confirmPassword) {
      // Show an error message if passwords don't match
      alert("Passwords do not match");
      return;
    }
    if (
      formData.email &&
      formData.password &&
      formData.fullName &&
      formData.ageRange
    ) {
      console.log("Success");
      const newUser = { email: formData.email, password: formData.password };
      setUsers((users) => [...users, newUser]);
    } else {
      console.log("Fail");
    }
    // Add logic to submit the form data to the server here
  };

  return (
    <>
      <button className="modal-button" onClick={() => setIsOpen(true)}>
        Create new account
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div>
                <input
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  placeholder="Confirm password"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  placeholder="FullName"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="form-age-label" htmlFor="ageRange">
                  Age Range:
                </label>
                <select
                  id="ageRange"
                  name="ageRange"
                  value={formData.ageRange}
                  onChange={handleInputChange}
                >
                  <option value="">Select Age Range</option>
                  <option value="18-24">18-24</option>
                  <option value="25-34">25-34</option>
                  <option value="35-44">35-44</option>
                  <option value="45+">45+</option>
                </select>
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
