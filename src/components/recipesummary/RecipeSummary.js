import React, { Component } from 'react';


class RecipeSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theTitle: "",
      theIngredients: [],
      theInstructions: [],
      ready: false
    }
    this.recipeID = this.props.match.params.recipeID
  }

  getRecipeSummary = () => {
    this.props.foodService.getRecipeSummary(this.recipeID)
      .then((theThing) => {
        let grabbedIngredients = theThing.extendedIngredients.map((eachI) => {
          return ({
            spoonID: eachI.id,
            name: eachI.name,
            usAmount: eachI.measures.us.amount,
            usUnit: eachI.measures.us.unitLong,
            metricAmount: eachI.measures.metric.amount,
            metricUnit: eachI.measures.metric.unitLong,
          })
        })
        this.setState({
          theTitle: theThing.title,
          theIngredients: grabbedIngredients,
          theInstructions: theThing.analyzedInstructions[0].steps,
          ready: true,
        }, () => console.log("theThing", theThing))
      })
  }

  displayRecipeIngredients = () => {
    return this.state.theIngredients.map((eachIngredient, i) => {
      return (
        <div key={i}>
          <span className="ingredient-name">{eachIngredient.name} / </span>
          <span className="ingredient-amount-us">{eachIngredient.usAmount}{eachIngredient.usUnit} / </span>
          <span className="ingredient-amount-metric">{eachIngredient.metricAmount}{eachIngredient.metricUnit}</span>
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
    this.props.cartService.addIngredients(this.state.theIngredients, this.recipeID, this.state.theTitle)
  }


  componentDidMount() {
    this.getRecipeSummary();
  }


  render() {

    if (this.state.ready)
      return (
        <div>
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