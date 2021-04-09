import React, { Component } from 'react'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default class Combine extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             recipes : [],
             ingredients : [],
             selectedIngredient :'',
             selectedRecipe:''
        }

        this.handleChangeRecipe = this.handleChangeRecipe.bind(this);
        this.fetchIngredientsData = this.fetchIngredientsData.bind(this);
        this.fetchRecipesData = this.fetchRecipesData.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
        this.doMagic = this.doMagic.bind(this);
    }

    fetchIngredientsData(){
        axios.get('https://tebsi-tn.herokuapp.com/api/ingredient')
          .then(response => {
            this.setState({ ingredients: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    fetchRecipesData(){
        axios.get('https://tebsi-tn.herokuapp.com/api/recipe')
            .then(response => {
                this.setState({ recipes: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    doMagic(e){
        
        e.preventDefault();
        let axiosConfig = {
            headers: {
                'content-type': 'application/json',
                'token':this.props.token
            }
          };
        let x = this.state.selectedRecipe;
        let y =  this.state.selectedIngredient;
        if (x === '' || y === '')return false;
        let url =`https://tebsi-tn.herokuapp.com/api/recipe/${x}/addingredient/${y}`
        
        axios.post(url,{},axiosConfig)
           .then(res => this.setState({selectedIngredient:''}) )
           .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchIngredientsData();
        this.fetchRecipesData();
      }

    handleChangeRecipe(props,e){
        this.setState({selectedRecipe:props.value});
    }
    handleChangeIngredient(props,e){
        this.setState({selectedIngredient:props.value});
    }
    
    render() {
        return (
            <div>
                <Dropdown options={this.state.recipes.map( e => ({label:e.recipeName,value:e._id})) } 
                onChange={this.handleChangeRecipe}  
                placeholder="Select a recipe" />

                <Dropdown options={this.state.ingredients.map( e => ({label:e.ingredientName,value:e._id})) } 
                onChange={this.handleChangeIngredient}  
                placeholder="Select an ingredient" />

                
                        <button type="button" className="btn btn-primary" 
                        onClick={this.doMagic}>
                         Add Ingredient to Recipe
                        </button>
                
            </div>
        )
    }
}
