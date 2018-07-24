import React, { Component } from "react";
import axios from "axios";
import "./Plans.css";

class Plans extends Component {

  state = {
    title: "",
    attendees: "",
    activity: "",
    date:"",
    notes: "",
    plans: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  savePlan = event => {
    event.preventDefault();
  };

  postPlans = event => {
    event.preventDefault();
    const { title, attendees, activity, date, notes} = this.state;
    axios.post("/api/plans", { title, attendees, activity, date, notes }).then(res => {
      console.log(res);
      this.setState({ title: "", attendees: "", activity: "", date:"", notes:"" }, () => {
        this.refreshPlans()
      });
    })
  };

  refreshPlans() {
    axios.get("/api/plans").then((res) => {
      console.log(res);
      this.setState({ plans: res.data })
    });
  };

  componentDidMount() {
    this.refreshPlans();
  };

  render() {
    return (

          <div className="row mx-auto justify-content-center" id="plansCardContainer">
            <div className="col-md-6">
              <div className="card">
                <h4 className="card-header bg-transparent text-center" id="plansHeader">Plan Something</h4>
                <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input name="title" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.title} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="attendees">Attendees</label>
                    <input name="attendees" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.attendees} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="activity">Activity</label>
                    <input name="activity" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.activity} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" className="form-control" onChange={this.handleInputChange} value={this.state.date} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" className="form-control" rows="3" onChange={this.handleInputChange} value={this.state.notes} />
                  </div>

                  <button type="submit" className="btn" id="plansBtn" onClick={this.postPlans}>Submit</button>
                </form>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
          
export default Plans;
          
      