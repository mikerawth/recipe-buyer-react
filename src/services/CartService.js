import axios from 'axios';

class CartService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/cart',
      withCredentials: true,
    });
    this.service = service;
  }

  addIngredients = (theIngredients, recipeApiID, recipeName) => {
    return this.service.post('/addRecipeAndIngredients', { theIngredients, recipeApiID, recipeName })
      .then(response => response.data)
  }

  grabIngredients = () => {
    return this.service.get('/getIngredients')
      .then(response => response.data)
  }


  grabUserAndCart = () => {
    return this.service.get('/usersCart')
      .then(response => response.data)
  }

  grabIngredientInfo = (ingID) => {
    return this.service.get(`/recipeIng/${ingID}`)
      .then(response => response.data)
  }
}

export default CartService;