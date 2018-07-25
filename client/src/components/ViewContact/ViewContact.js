import React, { Component } from "react";
import axios from "axios";
import "./ViewContact.css";

class ViewContact extends Component {

  state = {
    name: "",
    email: "",
    frequency:"",
    relationship: "",
    notes: "",
    contacts: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  refreshContacts() {
    axios.get("/api/contact").then((res) => {
      console.log(res);
      this.setState({ contacts: res.data })
    });
  };

  deleteContacts = id => {
    console.log("delete button is working");
    axios.delete("/api/contact/" + id)
      .then(res => this.refreshContacts())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.refreshContacts();
  };

  render() {
    return (

      <div>
        {this.state.contacts.map(post => (   
          <ul className="list-group" key={post._id}>
            <li className="list-group-item">
            <h3>{post.name}</h3>
            <p>Email: {post.email}</p>
            <p>Frequency (per month): {post.frequency}</p>
            <p>Relationship: {post.relationship}</p>
            <p>Notes: {post.notes}</p>
            <button className="btn btn-sm" id="viewContactBtn" onClick={() => this.deleteContacts(post._id)}>Delete</button>
            </li>
          </ul>
          ))
        }
      </div>
    );
  }
}
          
export default ViewContact;
          

    
        