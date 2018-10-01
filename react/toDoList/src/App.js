import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList  from './Components/ToDoList.js';
import {BrowserRouter as Router,
        Route,
        Link
} from 'react-router-dom'; 

import Home from './Home';
import About from './About';



class App extends Component {
  render() {
    return (
    <Router>        
      <div className="container">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />  
      </div>
      </Router>
    );
  }
}

export default App;
