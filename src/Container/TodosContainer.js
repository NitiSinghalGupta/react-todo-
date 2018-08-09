import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../Components/Todos';

export default class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
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


  render() {  
  //  console.log(this.state.todos)
    return (
      <div className="TodosContainer" >
        <h1> Welcome to my Todos Page! </h1>
        <Todos  todos={this.state.todos}   />
      </div>
    );
  }
}
