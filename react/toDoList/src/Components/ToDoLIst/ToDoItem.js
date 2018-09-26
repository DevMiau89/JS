import React, { Component } from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete() {
        this.props.onDelete(this.props.item);    
    }
    
    render() {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>  
                    <span className="item-delete" ></span>
                    <button onClick={this.handleDelete}>Delete Task</button>
                </div>
            </li>    
        )
    }
}

export default ToDoItem;