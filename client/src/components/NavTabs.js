import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        Home
      </Link>

      <Link
        to="/login"
        className={
          location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </Link>

      <Link
        to="/signup"
        className={
          location.pathname === "/signup" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </Link>

      <Link
        to="/inventory"
        className={
          location.pathname === "/inventory" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavTabs;
