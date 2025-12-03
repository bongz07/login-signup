import React from "react";
import "./LoginSignup.css";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import user from "../../assets/user.png";
import { useState } from "react";

const LoginSignup = () => {
  // add functionality to the form
  const [action, setAction] = useState("Sign Up");
  const [message, setMessage] = useState(""); //pop up a message ufter sign-up
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //function to run after clicking Sign

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            {" "}
            <img src={user} style={{ width: "25px", height: "auto" }} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="input">
          {" "}
          <img src={email} style={{ width: "25px", height: "auto" }} alt="" />
          <input
            type="email"
            placeholder="Email Address"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
        </div>
        <div className="input">
          {" "}
          <img
            src={password}
            style={{ width: "25px", height: "auto" }}
            alt=""
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="options-row">
          <label className="remember-me">
            <input type="checkbox" /> Remember Me
          </label>
          <div className="forgot-password">
            Forgot Password <span>Click Here!</span>
          </div>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            setMessage("You have signed up successfully!");
            setName("");
            setEmailInput("");
            setPasswordInput("");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
      {action === "Sign Up" && message && (
        <div className="success-message">{message}</div>
      )}
    </div>
  );
};

export default LoginSignup;
