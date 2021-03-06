import axios from 'axios'


class FoodService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/',
      withCredentials: true,
    });
    this.service = service;
  }


  test = () => {
    return 'test works'
  }

  searchRecipes = (query) => {
    return this.service.get('/recipes/search/' + query)
      .then(response => response.data)
  }

  getRecipeSummary = (recipeID) => {
    return this.service.get(`/recipes/${recipeID}/information`)
      .then(response => response.data)
  }

  // CHANGE TO GET PRICE OF RECIPE'S INGREDIENTS
  getRecipeIngredients = (recipeID) => {
    return this.service.get(`/recipes/${recipeID}/ingredients`)
      .then(response => response.data)
  }

  // DO NOT USE
  getRecipeInstructions = (recipeID) => {
    return this.service.get(`/recipes/${recipeID}/instructions`)
      .then(response => response.data)
  }

  addIngredients = (theIngredients, apiID) => {
    return this.service.post('/cart/addIngredients', { theIngredients, apiID })
      .then(response => response.data)
  }
}

export default FoodService