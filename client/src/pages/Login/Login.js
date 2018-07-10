import React, { Component } from "react";
import axios from "axios";

class Login extends Component {

  state = {
    name: "",
    email: "",
    text: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="name">Your Name</label>
            <input name="name" className="form-control" onChange={this.handleInputChange} value={this.state.name} />
          </div>
          <div className="form-group">
            <label for="email">Your Email</label>
            <input name="email" className="form-control" onChange={this.handleInputChange} value={this.state.email} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="text">Message</label>
            <textarea className="form-control text" onChange={this.handleInputChange} value={this.state.text} rows="3"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      );
    }
  }
            
export default Login;