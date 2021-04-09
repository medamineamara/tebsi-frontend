import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Login</Link>
        
        <div className="collpase navbar-collapse">

          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/recipes" className="nav-link">Recipes</Link>
            </li>
            <li className="navbar-item">
              <Link to="/ingredients" className="nav-link">Ingredients</Link>
            </li>
            <li className="navbar-item">
              <Link to="/add" className="nav-link">Add</Link>
            </li>
            <li className="navbar-item">
              <Link to="/combine" className="nav-link">Combine</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    );
  }
}