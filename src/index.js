import './bootstrap/bootstrap/scss/bootstrap.scss';
import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';


// Use react dom object.
ReactDOM.render(
    <Home title= "Wahlprogrammanalyse"></Home>,

    // Bind to element with this ID.
    document.getElementById('root')
)