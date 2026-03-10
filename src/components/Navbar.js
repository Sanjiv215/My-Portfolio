import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Sanjiv</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sep_about">About</Link></li>
     
        <li><Link to="/sep_contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;