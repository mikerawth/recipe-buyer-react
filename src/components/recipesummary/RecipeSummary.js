import React, { Component } from 'react';


class RecipeSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theTitle: "",
      theSummary: [],
      theIngredients: [],
      theInstructions: [],
      ready: false
    }
    this.recipeID = this.props.match.params.recipeID
  }

  getRecipeSummary = () => {
    this.props.foodService.getRecipeSummary(this.recipeID)
      .then((theThing) => {
        this.setState({
          theTitle: theThing.title,
          theSummary: [theThing.summary],
          ready: true,
        })
      })
  }

  getRecipeIngredients = () => {
    this.props.foodService.getRecipeIngredients(this.recipeID)
      .then((theReturn) => {
        let arr = theReturn.ingredients.map((eachIngredient) => {
          return eachIngredient
        })
        this.setState({ theIngredients: arr })

      })
  }

  getRecipeInstructions = () => {
    this.props.foodService.getRecipeInstructions(this.recipeID)
      .then((theInstructionQuery) => {
        this.setState({ theInstructions: theInstructionQuery[0].steps })
      })
  }


  displayRecipeIngredients = () => {
    return this.state.theIngredients.map((eachIngredient, i) => {
      return (
        <div key={i}>
          <span className="ingredient-name">{eachIngredient.name} / </span>
          <span className="ingredient-amount-us">{eachIngredient.amount.us.value}{eachIngredient.amount.us.unit} / </span>
          <span className="ingredient-amount-metric">{eachIngredient.amount.metric.value}{eachIngredient.amount.metric.unit}</span>
        </div>
      )
    })
  }

  displayRecipeInstructions = () => {
    return this.state.theInstructions.map((eachStep, i) => {
      return (
        <li key={i}>{eachStep.step}</li>
      )
    })
  }

  addIngredientsToCart = () => {
    this.props.foodService.addIngredients(this.state.theIngredients, this.recipeID)
  }


  componentDidMount() {
    this.getRecipeSummary();
    this.getRecipeIngredients();
    this.getRecipeInstructions();
  }


  render() {

    if (this.state.ready)
      return (
        <div>
          {console.log(this.state.theIngredients)}
          <div className="recipe-name">
            <h2>{this.state.theTitle}</h2>
          </div>

          <div className="recipe-ingredient-list">
            <h3>Ingredients</h3>
            {this.displayRecipeIngredients()}
          </div>


          <div className="recipe-directions">
            <h3>Directions</h3>
            <ol>
              {this.displayRecipeInstructions()}
            </ol>
          </div>

          <button onClick={this.addIngredientsToCart}>Add Ingredients</button>


        </div>
      )
    else {
      return (
        <div>Loading...</div>
      )
    }
  }

}

export default RecipeSummary;