import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Groups from "./pages/Groups";
import Plans from "./pages/Plans";
import AddNew from "./pages/AddNew";
import NotFound from "./pages/NotFound";
import UserHomePage from "./pages/UserHomePage";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";



//This component will be rendered by the router. 
const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/addnew" component={AddNew}/>
          <Route exact path="/userhomepage" component={UserHomePage}/>
          <Route exact path="/signup" component={Signup}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
  
export default App;
