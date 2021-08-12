import './bootstrap/bootstrap/scss/bootstrap.scss';
import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/home';
// import About from './pages/about';
import App from './App';
import {BrowserRouter} from "react-router-dom";


// Use react dom object.
ReactDOM.render(
    <App title="Wahlprogrammanalyse"></App>,

    // Bind to element with this ID.
    document.getElementById('root')
)