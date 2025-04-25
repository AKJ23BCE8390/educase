import React from "react";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Signin to your<br />PopX account</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>

        <Link to="/account-settings">
        <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
