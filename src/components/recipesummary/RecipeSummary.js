import React, { Component } from 'react';


class RecipeSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theTitle: "",
      theSummary: "",
      ready: false
    }

  }

  displayRecipeSummary = () => {
    this.props.foodService.getRecipeSummary(this.props.match.params.recipeID)
      .then((theThing) => {
        console.log(theThing.title)
        console.log(theThing.summary)
        this.setState({
          theTitle: theThing.title,
          theSummary: theThing.summary,
          ready: true,
        })
      })
  }



  componentDidMount() {
    this.displayRecipeSummary();
  }

  render() {
    if (this.state.ready)
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
    else {
      return (
        <div>Loading...</div>
      )
    }
  }

}

export default RecipeSummary;