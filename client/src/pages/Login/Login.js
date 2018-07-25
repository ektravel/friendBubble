import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {

  state = {
    username: "",
    password: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
    <div className="row mx-auto justify-content-center" id="loginCardContainer">
      <div className="col-md-6">
        <div className="card">
          <h4 className="card-header bg-transparent text-center" id="loginHeader">Login to Your Account</h4>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input name="username" className="form-control" onChange={this.handleInputChange} value={this.state.username} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Passoword</label>
                <input name="password" className="form-control" onChange={this.handleInputChange} value={this.state.password} />
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
            <p id="loginP">Don't have an account? Click here to <Link to="/signup">sign up</Link>.</p>
          </div>
        </div>
      </div>
    </div>

      );
    }
  }
            
export default Login;