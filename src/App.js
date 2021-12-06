import React, { Component } from "react";
import {
  BrowserRouter as Router,

  Route,
} from "react-router-dom";
import Log from "./log.js";
import Home from "./Home.js";
// import "./App.scss";



class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <Route path="/" exact component={Log} />
        <Route path="/home" exact component={Home} />
      </Router>
    );
  }
}



export default App;
