import React, { Component } from "react";
import "./AddNew.css";

class AddNew extends Component {

  state = {
    firstName: "",
    lastName: "",
    relationship: "",
    contact: "",
    notes: "",
    contactFrequency: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="row mx-auto justify-content-center" id="cardContainer">
        <div className="col-md-7">
          <div className="card">
            <h4 className="card-header text-center">Add a New Person</h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input name="firstName" className="form-control" onChange={this.handleInputChange} value={this.state.firstName} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input name="lastName" className="form-control" onChange={this.handleInputChange} value={this.state.lastName} />
                </div>
                <div className="form-group">
                  <label htmlFor="relationship">Last Name</label>
                  <select className="form-control" onChange={this.handleInputChange} value={this.state.relationship}>
                    <option>Family</option>
                    <option>Friend</option>
                    <option>Acquaintance</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact Information</label>
                  <textarea className="form-control" onChange={this.handleInputChange} value={this.state.contact} rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea className="form-control" onChange={this.handleInputChange} value={this.state.notes} rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="contactFrequency">Contact Frequency</label>
                  <select className="form-control" onChange={this.handleInputChange} value={this.state.contactFrequency}>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNew;