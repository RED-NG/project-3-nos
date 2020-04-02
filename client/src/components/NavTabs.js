import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={
            location.pathname === "/signup" ? "nav-link active" : "nav-link"
          }
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/inventory"
          className={
            location.pathname === "/inventory" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
