import React from "react";
import { Link } from "react-router-dom";
import "./UserCards.css";

const UserCards = () => (
<div className="row mx-auto justify-content-center">
  <div className="col-sm-4" id="leftCard">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">My Groups</h5>
        <p className="card-text">View your friend and family goups.</p>
        <Link to="/groups">Groups</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-center">
      <div className="card-body">
      <h5 className="card-title">My Plans</h5>
        <p className="card-text">View your past and upcoming activities.</p>
        <Link to="/plans">Plans</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-4" id="rightCard">
    <div className="card text-center">
      <div className="card-body">
      <h5 className="card-title">Add New</h5>
        <p className="card-text">Add a new friend or family member.</p>
        <Link to="/addnew">Add New</Link>
      </div>
    </div>
  </div>
</div>
);

export default UserCards;
