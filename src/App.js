import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import TodosContainer from './TodosContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1> Hello World! </h1> */}
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/todos' component={ TodosContainer }/>
        </Switch>  
      </div>
    );
  }
}


