import React, { Component } from 'react';
import axios from 'axios';

const Ingredient = props => (
    <tr>
      <td>{props.ingredient.ingredientName}</td>
      <td>{props.ingredient._id}</td>
      <td>
        <button type="button" value={props.ingredient._id} 
          className="btn btn-danger" onClick={props.handleDelete} >
          Delete
        </button>
      </td>
      <td>
        <button type="button" value={props.ingredient._id} 
          className="btn btn-warning" onClick={props.handleEdit} >
          Edit
        </button>
      </td>
    </tr>
  )

export default class Ingredients extends Component {
    constructor(props) {
        super(props);
    
        this.state = {ingredients: [],ingredientName:''};

        this.onChangeNewIngredient = this.onChangeNewIngredient.bind(this);
        this.onSubmitNew = this.onSubmitNew.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      }

      // ingredients list from API
      fetchData() {
        axios.get('https://tebsi-tn.herokuapp.com/api/ingredient')
          .then(response => {
            this.setState({ ingredients: response.data , ingredientName:'' })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      //delete ingredient
      handleDelete(e){
        e.preventDefault();
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              'token':this.props.token
          }
        };
        console.log(e.target.value);
        axios.delete('https://tebsi-tn.herokuapp.com/api/ingredient/'+ e.target.value
          ,axiosConfig)
        .then(res => this.fetchData())
        .catch(err => console.log(err))
      }

      //edit ingredient
      handleEdit(e){
        e.preventDefault();
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              'token':this.props.token
          }
        };
        let Name = prompt('Please Enter the new Name');
        axios.post('https://tebsi-tn.herokuapp.com/api/ingredient/update/'+ e.target.value
         ,{ingredientName: Name} ,axiosConfig)
        .then(res => this.fetchData())
        .catch(err => console.log(err))
      }

      //adding new ingredient to state
      onChangeNewIngredient(e){
          this.setState({
            ingredientName : e.target.value 
          });
      }

      //adding new ingredient to database
      onSubmitNew(e){
        e.preventDefault();
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json',
              'token':this.props.token
          }
        };
        axios.post('https://tebsi-tn.herokuapp.com/api/ingredient', {ingredientName:this.state.ingredientName}
          ,axiosConfig)
        .then(res => this.fetchData())
        .catch(err => console.log(err))
      }

      componentDidMount() {
        this.fetchData()
      }

      ingredientList() {
        return this.state.ingredients.map(currentingredient => {
          return <Ingredient ingredient={currentingredient} key={currentingredient._id}
              handleDelete={this.handleDelete} handleEdit={this.handleEdit} />;
        })
      }
  
      render() {
        return (
          <div>
            <h3>Create New Ingredient</h3>
              <form onSubmit={this.onSubmitNew}>
                <div className="form-group"> 
                  <label>Ingredient Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.ingredientName}
                      onChange={this.onChangeNewIngredient}
                      />
                </div>
                <div className="form-group">
                  <input type="submit" value="Create Ingredient" className="btn btn-primary" />
                </div>
              </form>
            <h3>Ingredients</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>id</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.ingredientList() }
              </tbody>
            </table>
          </div>
        )
      }
}