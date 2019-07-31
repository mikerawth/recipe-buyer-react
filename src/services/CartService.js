import axios from 'axios';

class CartService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/cart',
      withCredentials: true,
    });
    this.service = service;
  }

  addIngredients = (theIngredients, apiID) => {
    theIngredients.forEach((eachIngredient) => {
      return this.service.post('/addIngredients',
        {
          name: eachIngredient.name,
          usAmount: eachIngredient.amount.us.value,
          usUnit: eachIngredient.amount.us.unit,
          metricAmount: eachIngredient.amount.metric.value,
          metricUnit: eachIngredient.amount.metric.unit,
          recipeApiID: apiID
        })
        .then(response => response.data)

    })
  }

}

export default CartService;