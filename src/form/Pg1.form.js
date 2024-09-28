import React, { useContext } from "react";
import FormContext from "../formContext/form.context";
import "./Page1.css"; // Import the custom CSS file

export const Pg1 = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(FormContext);

  const handleSaveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  return (
    <div className="container1">
        
      <center>
        <h4>Step 1</h4>
        <h1>Your Profile</h1>
        <p>Enter the login information for your account. You will</p>
        <p>be able to create additional users after registering</p>
      </center>
      <form className="grid-container">
        <div className="flex-col">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              handleSaveToLocalStorage("firstName", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              handleSaveToLocalStorage("lastName", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleSaveToLocalStorage("email", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              handleSaveToLocalStorage("phoneNumber", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleSaveToLocalStorage("password", e.target.value);
            }}
            className="form-control"
          />
        </div>

        <div className="flex-col">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              handleSaveToLocalStorage("confirmPassword", e.target.value);
            }}
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};
