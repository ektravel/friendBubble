import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";

class Login extends Component {

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
    <div className="row mx-auto justify-content-center" id="cardContainer">
      <div className="col-md-6">
        <div className="card">
          <h4 className="card-header text-center">Login</h4>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input name="name" className="form-control" onChange={this.handleInputChange} value={this.state.name} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input name="email" className="form-control" onChange={this.handleInputChange} value={this.state.email} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>Don't have an account? Click here to <Link to="/signup">sign up</Link>.</p>
          </div>
        </div>
      </div>
    </div>

      );
    }
  }
            
export default Login;