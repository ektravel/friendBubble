import React from "react";
import "./About.css";

const About = () => (
    <div className = "container">
    <div classname="row justify-content-center">
      <div className="col lg-10">
        <h1>Meet the Team</h1>
        <p>
        Actually there is no team, it's just me. I built Friend Bubble as my final project for the Coding Bootcamp at UT. I chose to built it in React.js as a single-page application because, let's face it, React.js is really cool and fun to work with. As I gain more experience with React.js, I plan to add more features and imporve existing functionality of the app. Thanks for visiting and I hope you find this site useful. 
        </p>
        <p className="text-center" id="imgBox"><img className="img-fluid" id="aboutImg" alt="Responsive image" src="./images/greyParty.png"/></p>
      </div>
    </div>
  </div>
);

export default About;