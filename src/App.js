import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

import Navbar from "./components/navbar.component"
import Login from "./components/login.component";
import Recipes from "./components/recipes.component";
import Ingredients from "./components/ingredients.component";
import AddRecipe from "./components/add-recipe.component";
import Combine from "./components/combine.component";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {token:'',message:'please login'};

    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(username,password){
    
    axios.post('https://tebsi-tn.herokuapp.com/api/admin/login',{username,password})
    .then(response => {

      if(response.data.accessToken){
        this.setState((state,props) => ({ 
          token: response.data.accessToken, 
          message:'admin logged' }));
      }
      else {
        this.setState((state,props) => ({ 
          token: "", 
          message:"wrong login" }));
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render(){
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <br/>
          <Route path='/' exact >
              <Login message={this.state.message} submitLogin={this.submitLogin} />
          </Route>
          <Route path="/recipes" >
            <Recipes token={this.state.token} />
          </Route>
          <Route path="/ingredients">
            <Ingredients token={this.state.token} />
          </Route>
          <Route path="/add">
            <AddRecipe token={this.state.token} />
          </Route>
          <Route path="/combine">
            <Combine token={this.state.token} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
