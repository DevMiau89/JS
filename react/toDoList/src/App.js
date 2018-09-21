import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cheese: {name: 'Camembert', smell: 'mild', price: '3.50'}}

    }
    
    
    render() {
        return (
            <div className="main">
                <main>
                    <h1>To Do List</h1>
                    <p>The cheese name is {this.state.cheese.name}</p>
                    <p>The cheese smell is {this.state.cheese.smell}</p>
                    <p>The cheese price is {this.state.cheese.price}</p>
                </main>
            </div>
        )    
    }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ToDoList />    
      </div>      
    );
  }
}

export default App;
