import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {

  state = {
    name: "",
    email: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
    <div className="row mx-auto justify-content-center" id="signupCardContainer">
      <div className="col-md-6">
        <div className="card">
          <h4 className="card-header bg-transparent text-center" id="signupHeader">Create an account</h4>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input name="username" className="form-control" onChange={this.handleInputChange} value={this.state.username} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name="password" className="form-control" onChange={this.handleInputChange} value={this.state.password} />
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

      );
    }
  }
            
export default Signup;