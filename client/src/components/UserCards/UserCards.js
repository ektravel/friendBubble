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
  </div>
</div>
);

export default UserCards;
