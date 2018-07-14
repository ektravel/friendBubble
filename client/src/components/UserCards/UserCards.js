import React from "react";
import { Link } from "react-router-dom";
import "./UserCards.css";

const UserCards = () => (
<div className="container justify-content-center">
  <div className="row">
    <div className="col-sm-6 text-center userCard" >
      <Link to="/groups"><img src="./images/myGroups.png"/></Link>
    </div>
    <div className="col-sm-6 text-center userCard">
      <Link to="/plans"><img src="./images/myPlans.png"/></Link>
    </div>
  {/* <div className="col-sm-4" id="rightCard">
    <div className="card text-center">
      <div className="card-body">
      <h5 className="card-title">Add New</h5>
        <p className="card-text">Add a new friend or family member.</p>
        <Link to="/addnew">Add New</Link>
      </div>
    </div>
  </div> */}
  </div>
</div>
);

export default UserCards;
