import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (

<nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="/">
  <img id="bubble" src="./images/FriendBubble2.png" className="d-inline-block align-top" alt="" height="80px"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="/">home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">about</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/login">login</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">contact</Link>
      </li>
    </ul>
  </div>
</nav>

);
  
export default Nav;
  