import React from 'react'
import CartService from '../../services/CartService'


class CartIngredient extends React.Component {
  constructor(props) {
    super(props)
    this.cartService = new CartService()
    this.state = {
      ingName: '',
      ingUsAmount: 0,
      ingUsUnit: '',
      ingMetAmount: 0,
      ingMetUnit: '',
      ingCost: 0
    }
  }

  getRecipeIngredients = () => {
    this.cartService.grabIngredientInfo(this.props.ingredientID)
      .then((theIngredientInfo) => {
        this.setState({
          ingName: theIngredientInfo.name,
          ingUsAmount: theIngredientInfo.usAmount,
          ingUsUnit: theIngredientInfo.usUnit,
          ingMetAmount: theIngredientInfo.metricAmount,
          ingMetUnit: theIngredientInfo.metricUnit,
        })
      })
  }

  componentDidMount() {
    this.getRecipeIngredients();
  }

  displayRecipeIngredients = () => {
    return (
      <span>
        <span>{this.state.ingName}</span>
        <span>{this.state.ingUsAmount}</span>
        <span>{this.state.ingUsUnit}</span>
        <span>{this.state.ingMetAmount}</span>
        <span>{this.state.ingMetUnit}</span>
        <span>{this.state.ingCost}</span>
      </span>
    )
  }

  render() {
    return (
      <div className="ingredient-listing">
        {this.displayRecipeIngredients()}
      </div>
    )
  }
}
export default CartIngredient;