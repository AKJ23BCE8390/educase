import React from "react";
import '../styles/LandingPage.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <Link to="/create-account">
          <button className="registerBtn">Create Account</button>
        </Link>

        <Link to="/login">
          <button className="loginBtn">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
