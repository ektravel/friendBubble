import React from "react";
import "./Landing.css";
import ViewContact from "../../components/ViewContact";

// to do:
// change the landing page to be a component 
// add propt to display contacts on the page
// add props to display plans on the page




const Landing = () => (
  <div className = "container">
    <div className="row">
      <div className="col lg-6">
        <h2>My Contacts</h2>
        {/* <p><ViewContact/></p> */}
        </div>
      <div className="col lg-6">
      <h2>My Upcoming Events</h2>
      <p>This is where my upcoming events will be displayed.</p>
      </div>       
    </div>
  </div>
);

export default Landing;