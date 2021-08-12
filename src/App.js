import React from "react";
import hero from "./hero.jpg";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import { DataFetcher } from "./components/DataFetcher";

function App() {
    return (
        <Router>
    <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </div>
      </Router>
    );
}


export default App;