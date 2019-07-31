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
    return this.service.post('/addIngredients', { theIngredients, apiID })
      .then(response => response.data)
  }


}

export default CartService;