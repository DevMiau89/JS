import React, { Component } from 'react';
import ToDoItem from './ToDoList/ToDoItem.js'


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: ['wash up', 'eat some cheese', 'take a nap']}
        this.onDelete = this.onDelete.bind(this);
    }
    
    tick() {
        var ager = setTimeout(function(){
            this.setState({
            age: 35       
          });    
        }.bind(this), 5000)
        
    }    
    
    onDelete(item){
       var updatedTodos = this.state.todos.filter(function(val, index){
          return item !== val; 
       });
       
       this.setState({
           todos: updatedTodos
       })    
    }
    
    render() {
        
        return (
            <div className="main">
                <main>
                    <div className="todo-list">
                        <h1>To Do List</h1>

                        <br />
                        <ul style={{width: 500 + "px", margin: 'auto'}}>
                        {this.state.todos.map(function(item, index){
                            return <ToDoItem item={item} key={index} handleDelete={this.onDelete}/>; 
                        })}
                        </ul>
                        </div>    
                </main>
            </div>
        )    
    }
}



export default ToDoList;