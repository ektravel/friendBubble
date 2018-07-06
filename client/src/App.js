import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";


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
        </Switch>
   
      </div>
    </Router>
  );
  
export default App;
