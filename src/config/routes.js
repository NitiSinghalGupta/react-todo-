import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Components/Home';
import TodosContainer from '../Container/TodosContainer';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/todos' component={ TodosContainer }/>
    </Switch>  

)
