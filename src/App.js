import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import FoodService from './services/FoodService'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import RecipeSearch from './components/recipesearch/RecipeSearch';
import RecipeSummary from './components/recipesummary/RecipeSummary'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'test message for state',
      currentRecipeID: '',
    }
    this.foodService = new FoodService()
  }

  setCurrentRecipe = (queryRecipeID) => {
    this.setState({ currentRecipeID: queryRecipeID },
      () => console.log(this.state.currentRecipeID))
  }

  render() {
    return (
      <div className="App">
        <Navbar message={this.state.message} />
        <Switch>
          <Route exact path="/main" render={(props) =>
            <Main
              message={this.state.message}
            />} />
          <Route exact path="/recipes" render={(props) =>
            <RecipeSearch
              setCurrentRecipe={this.setCurrentRecipe}
              currentRecipeID={this.state.currentRecipeID}
            />} />
          <Route exact path="/recipes/summary/:recipeID" render={(props) =>
            <RecipeSummary
              {...props}
              currentRecipeID={this.state.currentRecipeID}
              foodService={this.foodService}
            />} />
        </Switch>
      </div>
    );
  }
}

export default App;