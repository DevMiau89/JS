import React, { Component } from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash up', 'eat some cheese', 'take a nap'], age: 30}
    }
    
    tick() {
        var ager = setTimeout(function(){
            this.setState({
            age: 35       
          });    
        }.bind(this), 5000)
        
    }    
    render() {
        
        return (
            <div className="main">
                <main>
                    <div className="todo-list">
                        <h1>To Do List</h1>
                        <p onClick={this.tick.bind(this)}>Age is {this.state.age} </p>
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

export default ToDoList;