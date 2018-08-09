import React, {Component}from 'react';

export default class Todo extends Component {
    constructor() {
        super();
        this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
      }
      deleteClickedTodo() {
        this.props.onDeleteTodo(this.props.todo);
      }
    render(){
        return (
            <p data-index={this.props.todo.id}>
                <span>{this.props.todo.body}</span>
                <span
                        className='deleteButton'
                        onClick={this.deleteClickedTodo}>
                            (X)
                </span>    
            </p>    
        )
    }

}