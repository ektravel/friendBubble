import React, { Component } from "react";
import axios from "axios";
import ViewContact from "../../components/ViewContact";
import "./AddNew.css";

class AddNew extends Component {
  state = {
    name: "",
    email: "",
    frequency:"",
    relationship: "",
    notes: "",
    contacts: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveContact = event => {
    event.preventDefault();
  };

  postContact = event => {
    event.preventDefault();
    const { name, email, frequency, relationship, notes } = this.state;
    axios.post("/api/contact", { name, email,frequency, relationship, notes }).then(res => {
      console.log(res);
      this.setState({ name: "", email: "",frequency: "", relationship: "", notes: "" }, () => {
        console.log("Contact has been added and records have been cleared");
        this.refreshContacts()
      });
    })
  };

  refreshContacts() {
    console.log("This should go!");
    axios.get("/api/contact").then((res) => {
      console.log(res);
      this.setState({ contacts: res.data })
    });
  };

  componentDidMount() {
    this.refreshContacts();
  };

  render() {
    return (
          <div className="row mx-auto justify-content-center" id="cardContainer">
            <div className="col-md-6">
              <div className="card">
                <h4 className="card-header text-center">Add a New Contact</h4>
                <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.name} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" className="form-control" type="email" onChange={this.handleInputChange} value={this.state.email} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="frequency">How many times per month do you want to connect?</label>
                    <input name="frequency" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.frequency} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="relationship">Relationship</label>
                    <select className="form-control" name="relationship" onChange={this.handleInputChange} value={this.state.relationship} >
                      <option>Please choose one</option>
                      <option>Family</option>
                      <option>Friend</option>
                      <option>Acquaintance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" className="form-control" rows="3" onChange={this.handleInputChange} value={this.state.notes} />
                  </div>

                  <button type="submit" className="btn btn-primary" id="addNewBtn" onClick={this.postContact}>Submit</button>
                </form>
                {this.state.contacts ? <ViewContact contacts={this.state.contacts} /> : null}
                </div>
              </div>
            </div>
          </div>
    );
  }
}
          
export default AddNew;
          
      