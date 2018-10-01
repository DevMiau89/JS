import React, { Component } from 'react';
import ToDoItem from './ToDoList/ToDoItem.js'
import AddItem from './ToDoList/AddItem.js'
import { Link } from 'react-router-dom';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash up', 'eat some cheese', 'take a nap']}
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    tick() {
        var ager = setTimeout(function(){
            this.setState({
            age: 35       
          });    
        }.bind(this), 5000)
        
    }
    
    onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        
        this.setState({
            todos: updatedTodos
       })   
    }
    
    onDelete(item){
       var updatedTodos = this.state.todos.filter(function(val, index){
          return item !== val; 
       });
       
       this.setState({
           todos: updatedTodos
       })    
    };
    
    render() {
        
        return (
            <div className="main">
                <main>
                    <div className="todo-list">
                        <h1>To Do List</h1>
                        <Link to={'/about'}>About</Link>
                        <br />
                        <ul style={{width: 500 + "px", margin: 'auto'}}>                       
                        {this.state.todos.map((item, index) => (
                            <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
                        ))}
                        </ul>
                        <br />
                        <AddItem onAdd={this.onAdd}/>
                       </div>               
                </main>
            </div>
        )    
    }
}



export default ToDoList;