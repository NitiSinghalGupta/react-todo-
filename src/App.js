import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import MyRoutes from './config/routes';
import Home from './Components/Home';
import TodosContainer from './Container/TodosContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1> Hello World! </h1> */}
        <Header/>
        { MyRoutes }
      </div>
    );
  }
}


