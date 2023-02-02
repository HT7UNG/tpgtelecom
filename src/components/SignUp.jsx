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
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
      //basic validation for now
      setErrorMessage("");
      setSuccessMessage("Signup successful! You may now close this.");
      const newUser = { email: formData.email, password: formData.password };
      //save to 'database'
      setUsers((users) => [...users, newUser]);
    } else {
      setSuccessMessage("");
      setErrorMessage("Signup failed, please fill out all the fields!");
    }
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
              <button className="x" onClick={() => setIsOpen(false)}>
                x
              </button>

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
              {successMessage && (
                <p style={{ color: "green", fontWeight: 600 }}>
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p style={{ color: "red", fontWeight: 600 }}>{errorMessage}</p>
              )}

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
