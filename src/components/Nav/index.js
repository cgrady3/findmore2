import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        FindMore
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/faqs"
              className={
                window.location.pathname === "/faqs"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;