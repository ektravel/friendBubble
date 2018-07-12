import React, { Component } from "react";
import axios from "axios";
import ViewContact from "../../components/ViewContact";
import UserCards from "../../components/UserCards";

class UserHomePage extends Component {
  state = {
    name: "",
    email: "",
    relationship: "",
    occupation: "",
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
    const { name, email, relationship, occupation, notes } = this.state;
    axios.post("/api/contact", { name, email, relationship, occupation, notes }).then(res => {
      console.log(res);
      this.setState({ name: "", email: "", relationship: "", occupation: "", notes: "" }, () => {
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
      <div>
        <UserCards />
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
                    <label htmlFor="relationship">Relationship</label>
                    <select className="form-control" name="relationship" onChange={this.handleInputChange} value={this.state.relationship} >
                      <option>Please choose one</option>
                      <option>Family</option>
                      <option>Friend</option>
                      <option>Acquaintance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input name="occupation" className="form-control" onChange={this.handleInputChange} value={this.state.occupation} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" className="form-control" rows="3" onChange={this.handleInputChange} value={this.state.notes} />
                  </div>

                  <button type="submit" className="btn btn-primary" onClick={this.postContact}>Submit</button>
                </form>
                {this.state.contacts ? <ViewContact contacts={this.state.contacts} /> : null}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
          
export default UserHomePage;
          
      