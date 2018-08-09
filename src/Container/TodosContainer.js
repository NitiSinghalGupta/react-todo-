import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../Components/Todos';
import CreateTodoForm from '../Components/CreateTodoForm';

export default class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    TodoModel.all().then( (res) => {
      // console.log('Resposne = ', res)
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    })
    .catch(err => console.log(err))
  }

  createTodo(todo) {
    let newTodo = {
        body: todo,
        completed: false
    }
    TodoModel.create(newTodo).then((res) => {
        let todos = this.state.todos
        let newTodos = todos.push(res.data)
        this.setState({newTodos})
    })
}

deleteTodo(todo) {
  TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter(function(todo) {
        return todo._id !== res.data._id
      });
      this.setState({todos})
  })
}

  render() {  
  
    return (
      <div className="todosComponent" >
        <h1> Welcome to my Todos Page! </h1>
        <Todos  
        todos={this.state.todos}   
        onDeleteTodo={this.deleteTodo}
        />
        <CreateTodoForm
        createTodo={ this.createTodo } />
      </div>
    );
  }
}
