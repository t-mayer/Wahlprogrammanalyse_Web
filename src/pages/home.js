import React from "react";
import hero from "../hero.jpg";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataFetcher } from "../components/DataFetcher";

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
          <h1><a href="https://github.com/t-mayer/Wahlprogrammanalyse">Wahlprogrammanalyse</a></h1>
          <div>
          <DataFetcher/>
          </div>
        </Router>
      </div>
    );
  }
}
