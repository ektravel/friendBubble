import React from "react";
import { Link } from "react-router-dom";

const UserCards = () => (
<div className="row">
  <div className="col-sm-4">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">My Groups</h5>
        <p className="card-text">View your friend and family goups.</p>
        <Link to="/">Dummy Link</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-center">
      <div className="card-body">
      <h5 className="card-title">My Activities</h5>
        <p className="card-text">View your past and upcoming activities.</p>
        <Link to="/">Dummy Link</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-center">
      <div className="card-body">
      <h5 className="card-title">Add New</h5>
        <p className="card-text">Add a new friend or family member.</p>
        <Link to="/">Dummy Link</Link>
      </div>
    </div>
  </div>
</div>
);

export default UserCards;
