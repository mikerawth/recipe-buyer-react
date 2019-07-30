import axios from 'axios'


class FoodService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/spoonacular',
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
    return this.service.get(`/recipes/${recipeID}/summary`)
      .then(response => response.data)
  }
}

export default FoodService