import React, {Component} from 'react';
import Todo from './Todo';

export default class Todos extends Component {

    render (){
        console.log('Todos Props', this.props)
        let todos = this.props.todos.map( (todo) => {
            return (
                <Todo key={todo._id}  
                      todo={todo}
                      onDeleteTodo={this.props.onDeleteTodo}                     
                      />
                 )
        })         
    return (
        <div className="todos">
           {todos}
        </div>
    )
}
}