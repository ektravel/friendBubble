import React, { Component } from "react";
import axios from "axios";
import ViewBlog from "../../components/ViewBlog";
import UserCards from "../../components/UserCards";

class Login extends Component {

  state = {
    title: "",
    body: "",
    blogs: null
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveBlog = event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.body);
  }

  postBlog = event => {
    event.preventDefault();
    const { title, body } = this.state;
    axios.post("/api/blog", { title, body }).then(res => {
      console.log(res);
      this.setState({ title: "", body: "" }, () => {
        console.log("Postblog finish");
        this.refreshBlogs()
      });
    }
    )
  }

  refreshBlogs() {
    console.log("This should go!");
    axios.get("/api/blog").then((res) => {
      console.log(res);
      this.setState({ blogs: res.data })
    });
  }

  componentDidMount() {
    this.refreshBlogs();
  }

  render() {
    return (
      <div>
        <UserCards />
        <form>
          <input name="title" onChange={this.handleInputChange} value={this.state.title} />
          <input name="body" onChange={this.handleInputChange} value={this.state.body} />
          <button onClick={this.postBlog}>Submit</button>
        </form>
        {this.state.blogs ? <ViewBlog blogs={this.state.blogs} /> : null}
      </div>
    );
  }
}





export default Login;