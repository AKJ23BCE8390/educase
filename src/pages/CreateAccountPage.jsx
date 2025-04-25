import React from "react";
import "../styles/CreateAccountPage.css";
import { Link } from "react-router-dom";

function CreateAccountPage() {
  return (
    <div className="create-account-page">
      <div className="create-container">
        <h1>Create your<br />PopX account</h1>

        <form>
          <div className="input-group">
            <label htmlFor="fullName">Full Name<span>*</span></label>
            <input type="text" id="fullName" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone number<span>*</span></label>
            <input type="tel" id="phone" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email address<span>*</span></label>
            <input type="email" id="email" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password<span>*</span></label>
            <input type="password" id="password" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label htmlFor="company">Company name</label>
            <input type="text" id="company" placeholder="Marry Doe" />
          </div>

          <div className="radio-group">
            <p>Are you an Agency?<span>*</span></p>
            <label><input type="radio" name="agency" value="yes" /> Yes</label>
            <label><input type="radio" name="agency" value="no" /> No</label>
          </div>

          <Link to="/account-settings">
          <button className="create-btn">Create Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
