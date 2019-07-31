import React from 'react';
import CartService from '../../services/CartService'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartIngredients: [],
    }
    this.cartService = new CartService()
  }

  getCartIngredients = () => {
    this.cartService.grabIngredients()
      .then((allIngredients) => {
        this.setState({ cartIngredients: allIngredients },
          () => console.log("cart ingredients", this.state.cartIngredients))
      })
  }

  componentDidMount() {
    this.getCartIngredients();
  }

  displayCartIngredients = () => {
    return this.state.cartIngredients.map((eachIngredient) => {
      // console.log(eachIngredient)
      return (
        <div key={eachIngredient._id}>
          <span className="ingredient-name">{eachIngredient.name} / </span>
          <span className="ingredient-amount-us">{eachIngredient.usAmount}{eachIngredient.usUnit} / </span>
          <span className="ingredient-amount-metric">{eachIngredient.metricAmount}{eachIngredient.metricAmount}</span>
        </div>
      )
    })
  }

  render() {
    return (
      <div>{this.displayCartIngredients()}</div>
    )
  }
}

export default Cart
