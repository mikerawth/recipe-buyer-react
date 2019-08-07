import React from 'react'
import CartService from '../../services/CartService'


class CartIngredient extends React.Component {
  constructor(props) {
    super(props)
    this.cartService = new CartService()
    this.state = {
      id: '',
      ingInclude: false,
      ingName: '',
      ingUsAmount: 0,
      ingUsUnit: '',
      ingMetAmount: 0,
      ingMetUnit: '',
      ingCost: 0
    }
  }

  getRecipeIngredients = () => {
    this.setState({
      id: this.props.eachIng._id,
      ingInclude: this.props.eachIng.include,
      ingName: this.props.eachIng.name,
      ingUsAmount: this.props.eachIng.usAmount,
      ingUsUnit: this.props.eachIng.usUnit,
      ingMetAmount: this.props.eachIng.metricAmount,
      ingMetUnit: this.props.eachIng.metricUnit,
    })
  }

  componentDidMount() {
    this.getRecipeIngredients();
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  checkBoxToggle = () => {
    this.cartService.toggleIngredient(this.state.id, this.state.ingInclude)
      .then(() => {
        this.setState({ ingInclude: !this.state.ingInclude },
          () => console.log(this.state.id))
      })
  }

  ingredientCheckBox = () => {
    if (this.state.ingInclude)
      return (
        <input
          onChange={() => this.checkBoxToggle()}
          type="checkbox"
          value={this.state.ingInclude}
          checked="checked"
        />
      )
    else
      return (
        <input
          onChange={() => this.checkBoxToggle()}
          type="checkbox"
          value={this.state.ingInclude}
          checked=""
        />
      )
  }

  displayRecipeIngredients = () => {
    return (
      <span>
        {this.ingredientCheckBox()}
        <span>{this.state.ingName}</span>
        {/* <span>{this.state.ingUsAmount}</span>
        <span>{this.state.ingUsUnit}</span>
        <span>{this.state.ingMetAmount}</span>
        <span>{this.state.ingMetUnit}</span>
        <span>{this.state.ingCost}</span> */}
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