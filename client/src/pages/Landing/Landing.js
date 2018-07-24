import React, { Component } from "react";
import "./Landing.css";
import axios from "axios";
import ViewContact from "../../components/ViewContact";
import ViewPlans from "../../components/ViewPlans";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {
    name: "",
    email: "",
    frequency:"",
    relationship: "",
    notes: "",
    contacts: null,
    title: "",
    attendees: "",
    activity: "",
    date:"",
    plans: null
  };

  refreshPlans() {
    axios.get("/api/plans").then((res) => {
      console.log(res);
      this.setState({ plans: res.data })
    });
  };

  refreshContacts() {
    axios.get("/api/contact").then((res) => {
      console.log(res);
      this.setState({ contacts: res.data })
    });
  };

  componentDidMount() {
    this.refreshContacts(); 
    this.refreshPlans();
  };

  render() {
    return (

      <div className = "container">
      <div className="row">
        <div className="col lg-6">
          <h2>My Contacts</h2>
          {this.state.contacts ? <ViewContact contacts={this.state.contacts} /> : null}
          <p><Link to="/addnew">Add New Contact</Link></p>
          </div>
        <div className="col lg-6">
        <h2>My Upcoming Events</h2>
        {this.state.plans ? <ViewPlans plans={this.state.plans} /> : null}
        <p><Link to="/plans">Add New Event</Link></p>
        </div>       
      </div>
    </div>
    );
  }
}
          
export default Landing;


