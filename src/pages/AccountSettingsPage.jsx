import React from "react";
import "../styles/AccountSettingsPage.css";

function AccountSettingsPage() {
  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <div className="profile-section">
        <div className="profile-picture">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="Profile"
            className="avatar"
          />
          <span className="camera-icon">📷</span>
        </div>
        <div className="user-info">
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <p className="bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
        Sed Diam
      </p>
    </div>
  );
}

export default AccountSettingsPage;
