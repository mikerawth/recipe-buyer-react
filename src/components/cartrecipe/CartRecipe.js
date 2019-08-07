import React from 'react'
import CartIngredient from '../cartingredient/CartIngredient'



class CartRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeName: props.recipeInfo.name,
      recipeIngredients: props.recipeInfo.ingredients,
    }
  }

  displayRecipeIngredients = () => {
    return this.state.recipeIngredients.map((eachIng) => {
      return (
        <div className="ingredient-listing" key={eachIng._id}>
          <CartIngredient eachIng={eachIng} />
        </div>
      )
    })
  }

  render() {
    // console.log(this.state.recipeIngredients)
    return (
      <div className="cart-recipe">
        <div className="cart-recipe-header"><h3>{this.state.recipeName}</h3></div>
        <div className="cart-recipe-info">
          {this.displayRecipeIngredients()}
        </div>
      </div>
    )
  }
}
export default CartRecipe;