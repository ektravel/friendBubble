import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
<nav>
<div className="nav-wrapper">
  <Link className="brand-logo" to="/">Friend Bubble</Link>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><Link className="nav-link" to="/">home</Link></li>
    <li><Link className="nav-link" to="/about">about</Link></li>
    <li><Link className="nav-link" to="/login">login</Link></li>
    <li><Link className="nav-link" to="/contact">contact</Link></li>
  </ul>
</div>
</nav>
);
  
export default Nav;
  