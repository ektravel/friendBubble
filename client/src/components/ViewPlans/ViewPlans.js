import React, { Component } from "react";
import axios from "axios";
import "./ViewPlans.css"

class ViewPlans extends Component {

  state = {
    title: "",
    attendees: "",
    activity: "",
    date:"",
    notes: "",
    plans: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  refreshPlans() {
    axios.get("/api/plans").then((res) => {
      console.log(res);
      this.setState({ plans: res.data })
    });
  };

  deletePlan = id => {
    console.log("delete button is working");
    axios.delete("/api/plans/" + id)
      .then(res => this.refreshPlans())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.refreshPlans();
  };

  render() {
    return (

      <div>
        {this.state.plans.map(post => (   
          <ul className="list-group" key={post._id}>
            <li className="list-group-item">
            <h3>{post.title}</h3>
            <p>Attendees: {post.attendees}</p>
            <p>Activity: {post.activity}</p>
            <p>Date: {post.date}</p>
            <p>Notes: {post.notes}</p>
            <button className="btn btn-sm" id="viewPlansBtn" onClick={() => this.deletePlan(post._id)}>Delete</button>
            </li>
          </ul>
          ))
        }
      </div>
    );
  }
}
          
export default ViewPlans;
          