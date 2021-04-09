import React, { Component } from 'react';
import axios from 'axios';

const Recipe = props => {
  const ingredientsList = (tab) =>{
    return tab.map(ingredient => {
      return <li key={ingredient._id} >
        {ingredient.ingredientName}
        </li>;
    })
  }
  
  return(<tr>
    <td>{props.recipe._id}</td>
    <td>{props.recipe.recipeName}</td>
    <td>{props.recipe.foodCategory}</td>
    <td>{props.recipe.recipeDescription}</td>
    <td>{props.recipe.prepareTime}</td>
    <td>{props.recipe.cookTime}</td>
    <td> <ul>{ingredientsList(props.recipe.ingredients)}</ul> </td>
    <td>
        <button type="button" value={props.recipe._id} 
          className="btn btn-danger" onClick={props.handleDelete} >
          Delete
        </button>
      </td>
  </tr>);
}

export default class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {recipes: []};
    this.fetchData = this.fetchData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    axios.get('https://tebsi-tn.herokuapp.com/api/recipe')
      .then(response => {
        this.setState({ recipes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleDelete(e){
        e.preventDefault();
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              'token':this.props.token
          }
        };
        console.log(e.target.value);
        axios.delete('https://tebsi-tn.herokuapp.com/api/recipe/'+ e.target.value
          ,axiosConfig)
        .then(res => this.fetchData())
        .catch(err => console.log(err))
  }
  
  recipesList() {
    return this.state.recipes.map(currentrecipe => {
      return <Recipe recipe={currentrecipe} key={currentrecipe._id}
       handleDelete={this.handleDelete} />;
    })
  }


  render() {
    return (
      <div>
        <h3>Recipes</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Food Category</th>
              <th>Description</th>
              <th>prepare Time</th>
              <th>Cook time</th>
              <th>Ingredients</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.recipesList() }
          </tbody>
        </table>
      </div>
    )
  }
}