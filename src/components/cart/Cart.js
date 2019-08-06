import React from 'react';
import CartService from '../../services/CartService'

import CartRecipe from '../cartrecipe/CartRecipe'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartIngredients: [],
      cartRecipes: [],
    }
    this.cartService = new CartService()
  }

  getCartIngredients = () => {
    this.cartService.grabIngredients()
      .then((allIngredients) => {
        this.setState({ cartIngredients: allIngredients })
      })
  }

  getUsersCart = () => {
    this.cartService.grabUserAndCart()
      .then((theUsersInfo) => {
        // console.log(theUsersInfo.cart)
        this.setState({ cartRecipes: theUsersInfo.cart })
      })
  }

  componentDidMount() {
    this.getCartIngredients();
    this.getUsersCart();
  }

  displayCartRecipes = () => {
    return this.state.cartRecipes.map((eachRecipe) => {
      return (
        <div key={eachRecipe._id}>
          <CartRecipe recipeInfo={eachRecipe} />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.displayCartRecipes()}
      </div>
    )
  }
}

export default Cart
