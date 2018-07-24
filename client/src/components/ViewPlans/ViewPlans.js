import React, { Component } from "react";
import axios from "axios";


// const ViewPlans = (props) => (
//     <div>
//       {props.plans.map(post => (   
//         <ul className="list-group" key={post._id}>
//            <li className="list-group-item">
//             <h3>{post.title}</h3>
//             <p>Attendees: {post.attendees}</p>
//             <p>Activity: {post.activity}</p>
//             <p>Date: {post.date}</p>
//             <p>Notes: {post.notes}</p>
//             <button onClick={() => deletePlan(post._id)}>Delete</button>
            
//             </li>
//         </ul>
//         ))
//     }
//     </div>
// );

// export default ViewPlans;


class ViewPlans extends Component {

  state = {
    title: "",
    attendees: "",
    activity: "",
    date:"",
    notes: "",
    plans: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  refreshPlans() {
    axios.get("/api/plans").then((res) => {
      console.log(res);
      this.setState({ plans: res.data })
    });
  };

  deletePlan = id => {
    console.log("delete button is working");
    axios.delete("/api/plans/" + id)
      .then(res => this.refreshPlans())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.refreshPlans();
  };

  render() {
    return (

      <div>
        {this.state.plans.map(post => (   
          <ul className="list-group" key={post._id}>
            <li className="list-group-item">
            <h3>{post.title}</h3>
            <p>Attendees: {post.attendees}</p>
            <p>Activity: {post.activity}</p>
            <p>Date: {post.date}</p>
            <p>Notes: {post.notes}</p>
            <button onClick={() => this.deletePlan(post._id)}>Delete</button>
            </li>
          </ul>
          ))
        }
      </div>


          // <div className="row mx-auto justify-content-center" id="plansCardContainer">
          //   <div className="col-md-6">
          //     <div className="card">
          //       <h4 className="card-header bg-transparent text-center" id="plansHeader">Plan Something</h4>
          //       <div className="card-body">
          //       <form>
          //         <div className="form-group">
          //           <label htmlFor="title">Title</label>
          //           <input name="title" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.title} />
          //         </div>

          //         <div className="form-group">
          //           <label htmlFor="attendees">Attendees</label>
          //           <input name="attendees" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.attendees} />
          //         </div>

          //         <div className="form-group">
          //           <label htmlFor="activity">Activity</label>
          //           <input name="activity" className="form-control" type="text" onChange={this.handleInputChange} value={this.state.activity} />
          //         </div>

          //         <div className="form-group">
          //           <label htmlFor="date">Date</label>
          //           <input type="date" name="date" className="form-control" onChange={this.handleInputChange} value={this.state.date} />
          //         </div>

          //         <div className="form-group">
          //           <label htmlFor="notes">Notes</label>
          //           <textarea name="notes" className="form-control" rows="3" onChange={this.handleInputChange} value={this.state.notes} />
          //         </div>

          //         <button type="submit" className="btn" id="plansBtn" onClick={this.postPlans}>Submit</button>
          //       </form>
          //       </div>
          //     </div>
          //   </div>
          // </div>
    );
  }
}
          
export default ViewPlans;
          