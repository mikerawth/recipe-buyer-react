import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodService from '../../services/FoodService';

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      searchResults: [],
    };
    this.service = new FoodService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchRecipe = (e) => {
    e.preventDefault();
    const rSearch = this.state.recipeName;


    this.service.searchRecipes(rSearch)
      .then((searchResults) => {
        console.log(searchResults)
        this.setState({
          searchResults: searchResults.results,

        })
      })

  }

  displayRecipeSearchResults = () => {
    return this.state.searchResults.map((eachRecipe, i) => {
      return (
        <div key={i}>
          <Link to={`recipes/summary/${eachRecipe.id}`}>
            {/* <button onClick={() => this.props.setCurrentRecipe(eachRecipe.id)}> */}
            {eachRecipe.title}
            {/* </button> */}
          </Link>
        </div>
      )
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.searchRecipe}>

          <h3>Look Up Recipe</h3>

          <legend>Recipe</legend>
          <input value={this.state.recipeName}
            name="recipeName"
            onChange={this.handleChange}
          />

          <button>Submit</button>

        </form>


        {this.displayRecipeSearchResults()}
      </div>
    )
  }
}

export default RecipeSearch;