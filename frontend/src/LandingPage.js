import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function LandingPage() {
  return (
    <div className="landing-page-main">
      <NavBar />
      <div className="landing-page">
        <div>
          <p className="landing-text">
            <b>Welcome to Debbie'z Shopping List!</b>
          </p>
          <p className="landing-text-minor">Click the button to get started.</p>
          <Link to="/login">
            {" "}
            <button className="landing-btn">Go to Shopping List</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
