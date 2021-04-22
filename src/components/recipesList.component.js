import React, { Component } from 'react'
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";


const Recipe = props => {
    const ingredientsList = (tab) =>{
      return tab.map(ingredient => {
        return <li key={ingredient._id} >
          {ingredient.ingredientName}
          </li>;
      })
    }
    
    return(
        <div className="row" style={{paddingTop:"20px"}}>
            <div className="col-6">
                <h3 className="text-primary text-center">{props.recipe.recipeName}</h3>
                <h5 className="text-info">for {props.recipe.foodCategory}</h5>
                <p >{props.recipe.recipeDescription}</p>
                <p>prepare time : {props.recipe.prepareTime}, cook time {props.recipe.cookTime}</p>
                <p>Ingredients :</p>
                <ul> {ingredientsList(props.recipe.ingredients)} </ul>
            </div>
            <div className="col">
                 <img className="img-thumbnail" 
                    style={{maxWidth:"350px",height:"auto"}}
                    src={`/photos/${props.recipe.recipeName}.jpg`} 
                    alt="" />
            </div>
        </div>
    );
  }



class RecipesList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             recipes:[]
        }
        this.fetchData = this.fetchData.bind(this);
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

    recipesList() {
        return this.state.recipes.map(currentrecipe => {
          return (
            
                <Recipe recipe={currentrecipe} key={currentrecipe._id} />
            );
        })
    }
    
    render() {
        return (
            <div>
                <header id="header" style={{ backgroundColor:'black' }} >
                  { // <img src="logo.png" alt="nike logo" id="header-img" /> 
                  }
                    <nav id="nav-bar"  >
                        <ul id="nav-list">
                        <li id="link2"><a class="nav-link" href="/">Home</a></li>
                        <li id="link1"><a class="nav-link" href="/login">Admin</a></li>
                        <li id="link3"><a class="nav-link" href="/ingredients-search">Serach Per Ingredients</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="container" style={{paddingTop:"50px"}}>
                    { this.recipesList() }
                </div>
            </div>
        )
    }
}

export default RecipesList
