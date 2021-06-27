import React from "react";
import hero from "../hero.jpg";
import Navbar from "../components/Navbar";
import BarChart from "../components/BarChart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import FetchData from "../components/FetchData";

// Define new class: home component.
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar>
            <Switch>
              <Route path="/" exact/>
            </Switch>
          </Navbar>
          <img src={hero}></img>
          <h1>jshfdsalkjf</h1>
          <div><FetchData></FetchData></div>
        </Router>
      </div>
    );
  }
}
