import React, { Component } from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    
    handleDelete() {
        this.props.handleDelete(this.props.item);    
    }
    
    render() {
        return (
            <li onClick={this.delete}>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>                   
                </div>
            </li>    
        )
    }
}

export default ToDoItem;