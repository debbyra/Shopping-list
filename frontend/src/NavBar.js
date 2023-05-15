import React from "react";
import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav-links">
        {/* <li> */}
          <Link to="/">Home</Link>
        {/* </li> */}
        {/* <li> */}
          <Link to="/register">Sign In</Link>
        {/* </li> */}
        {/* <li> */}
          <Link to="/login">Login In</Link>
        {/* </li> */}
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBar;
