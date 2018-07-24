import React from "react";
import "./About.css";

const About = () => (
    <div className = "container">
    <div className="row justify-content-center">
      <div className="col lg-10">
        <h1>Welcome to Friend Bubble</h1>
        <p>
        Friend Bubble is a simple platform designed to help you stay connected with your family and friends. It is really easy to use. Just add the people you want to keep in touch with, choose how often you want to connect with them, and start making plans. Friend Bubble will send you a weekly notification reminding you of your goals and plans so that you never miss an opportunity to connect with others.
        </p>
        <br/>
       <p className= "text-center text-muted" id="aboutP"> Make time for family and friends. </p>
      </div>
    </div>
  </div>
);

export default About;


