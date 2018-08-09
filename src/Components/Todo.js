import React, {Component}from 'react';
import TodoForm from '.Component/TodoForm'

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
                <span onClick={ this.editClickedTodo }>
                {/* {this.props.todo.body} */}
                <TodoForm
                    autoFocus={true}
                    buttonName="Update Todo!"
                    onUpdateTodo={this.props.onUpdateTodo} />
                </span>
                { this.props.editingTodoId === this.props.todo._id ? `${this.props.todo.body} is being edited` : '' }
                <span
                        className='deleteButton'
                        onClick={this.deleteClickedTodo}>
                            (X)
                </span>    
            </p>    
        )
    }

}