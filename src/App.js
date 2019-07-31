import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import FoodService from './services/FoodService'
import CartService from './services/CartService'

import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import RecipeSearch from './components/recipesearch/RecipeSearch';
import RecipeSummary from './components/recipesummary/RecipeSummary'
import Cart from './components/cart/Cart'

import AuthService from './services/AuthService.js';
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'test message for state',
      currentRecipeID: '',
    }
    this.foodService = new FoodService()
    this.authService = new AuthService()
    this.cartService = new CartService()
  }

  getCurrentlyLoggedInUser = () => {
    this.authService.currentUser()
      .then((theUser) => {
        this.setState({ currentlyLoggedIn: theUser })
      })
      .catch(() => {
        this.setState({ currentlyLoggedIn: null })
      })
  }

  // want to remove (using a params to find data)
  setCurrentRecipe = (queryRecipeID) => {
    this.setState({ currentRecipeID: queryRecipeID },
      () => console.log(this.state.currentRecipeID))
  }

  componentDidMount() {
    this.getCurrentlyLoggedInUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar
          theUser={this.state.currentlyLoggedIn}
          pleaseLogOut={() => this.authService.logout()}
          getUser={this.getCurrentlyLoggedInUser}
        />

        <Switch>

          <Route exact path="/login" render={(props) =>
            <Login
              getUser={this.getCurrentlyLoggedInUser}
            />} />

          <Route exact path="/signup" render={(props) =>
            <Signup
              getUser={this.getCurrentlyLoggedInUser}
            />} />


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
              cartService={this.cartService}
            />} />

          <Route exact path="/cart" render={(props) =>
            <Cart
            />} />
        </Switch>
      </div>
    );
  }
}

export default App;