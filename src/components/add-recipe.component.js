import React, { Component } from 'react'
import axios from 'axios';

export default class AddRecipe extends Component {
    constructor(props){
        super(props);
        this.state= {
            recipeName : '',
            foodCategory:'',
            recipeDescription:'',
            prepareTime:'',
            cookTime:''
        };

        this.onSubmitNew = this.onSubmitNew.bind(this);
    }

    onSubmitNew(e){
        e.preventDefault();
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'token':this.props.token
            }
          };
        
          const copy = Object.assign({}, this.state);
          axios.post('https://tebsi-tn.herokuapp.com/api/recipe', copy
          ,axiosConfig)
            .then(res => this.setState({
                recipeName : '',
                foodCategory:'',
                recipeDescription:'',
                prepareTime:'',
                cookTime:''
            }))
            .catch(err => console.log(err))
    } 

    render() {
        return (
            <div>
                <h3>Create New Recipe</h3>

                <form onSubmit={this.onSubmitNew}>

                    <div className="form-group"> 
                        <label>Recipe Name: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.recipeName}
                            onChange={ (e) => this.setState( { recipeName : e.target.value } ) }
                            />
                    </div>

                    <div className="form-group"> 
                        <label>Food Category: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.foodCategory}
                            onChange={ (e) => this.setState( { foodCategory : e.target.value } ) }
                            />
                    </div>

                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.recipeDescription}
                            onChange={ (e) => this.setState( { recipeDescription : e.target.value } ) }
                            />
                    </div>

                    <div className="form-group"> 
                        <label>Prepare Time: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.prepareTime}
                            onChange={ (e) => this.setState( { prepareTime : e.target.value } ) }
                            />
                    </div>

                    <div className="form-group"> 
                        <label>Cook Time: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.cookTime}
                            onChange={ (e) => this.setState( { cookTime : e.target.value } ) }
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Recipe" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
