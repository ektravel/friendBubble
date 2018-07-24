import React, { Component } from "react";
import axios from "axios";

class Plans extends Component {

  state = {
    title: "",
    attendees: "",
    activity: "",
    relationship: "",
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
    const { title, attendees, activity, relationship, date, notes} = this.state;
    axios.post("/api/plans", { title, attendees, activity, relationship, date, notes }).then(res => {
      console.log(res);
      this.setState({ title: "", attendees: "", activity: "", relationship:"", date:"", notes:"" }, () => {
        console.log("New activity has been added");
        this.refreshPlans()
      });
    })
  };

  refreshPlans() {
    console.log("This should go!");
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

          <div className="row mx-auto justify-content-center" id="cardContainer">
            <div className="col-md-6">
              <div className="card">
                <h4 className="card-header text-center">Plan Something</h4>
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
                    <label htmlFor="relationship">Relationship</label>
                    <select className="form-control" name="relationship" onChange={this.handleInputChange} value={this.state.relationship} >
                      <option>Please choose one</option>
                      <option>Family</option>
                      <option>Friend</option>
                      <option>Acquaintance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" className="form-control" onChange={this.handleInputChange} value={this.state.date} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" className="form-control" rows="3" onChange={this.handleInputChange} value={this.state.notes} />
                  </div>

                  <button type="submit" className="btn btn-primary" onClick={this.postPlans}>Submit</button>
                </form>
                {/* {this.state.plans ? <ViewPlans plans={this.state.plans} /> : null} */}
                </div>
              </div>
            </div>
          </div>
    );
  }
}
          
export default Plans;
          
      