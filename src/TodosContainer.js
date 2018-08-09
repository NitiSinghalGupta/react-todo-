import React, { Component } from 'react';


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
