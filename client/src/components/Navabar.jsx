import React from "react";
import { Link } from "react-router-dom";

export default function Navabar() {
  return (
    <nav>
      <div classname="nav-wrapper">
        <Link to="/" className="brand-logo">
          Quotes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">New Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
