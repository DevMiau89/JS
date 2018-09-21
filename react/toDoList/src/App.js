import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash up', 'eat some cheese', 'take a nap']}
    }
        
    render() {
        return (
            <div className="main">
                <main>
                    <div className="todo-list">
                        <h1>To Do List</h1>
                        <br />
                        <ul style={{width: 500 + "px", margin: 'auto'}}>
                        {this.state.todos.map(function(listValue){
                            return <li>{listValue}</li>; 
                        })}
                        </ul>
                        </div>    
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
