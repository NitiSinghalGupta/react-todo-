import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
  render(){
    return (
      <header className="header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
            <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                       <Link className="nav-link" to={'/'}>Home</Link>             
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to={'/todos'}>Todos</Link>
                    </li>      
                </ul>
            </div>
        </div>
        </nav>          
      </header>
    )
  }
}