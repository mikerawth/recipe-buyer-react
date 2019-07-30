import React, { Component } from 'react';


class RecipeSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theTitle: "",
      theSummary: "",
    }

  }

  displayRecipeSummary = () => {
    this.props.foodService.getRecipeSummary(this.props.match.params.recipeID)
      .then((theThing) => {
        console.log(theThing.title)
        console.log(theThing.summary)
        this.setState({
          theTitle: theThing.title,
          theSummary: theThing.summary
        })
      })
  }



  componentDidMount() {
    this.displayRecipeSummary();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          {this.state.theTitle}
        </div>

        <div>
          {this.state.theSummary}
        </div>
      </div>
    )
  }

}

export default RecipeSummary;