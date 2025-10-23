import { products } from "./products.js";

// Empty cart Can be use outside cart Js 
export const cart = [{
  // CREATE DEFAULT DATA
    productId: 'item4',
    quantity: 2,
  },{ 
    productId: 'item5',
    quantity: 1
  }
];

export function addToCart(productId) {
        let matchItem; // Accumulator
        let selectedQuantity = document.querySelector(`.js-quantity-selector-${productId}`).value;
        let quantity = Number(selectedQuantity);    
      //If already in the cart
      cart.forEach((cartItem) => {
        if(productId === cartItem.productId) {
          matchItem = cartItem; // Assigning
        }
      })
      // If there is a same item it becomes true
      if(matchItem){
        matchItem.quantity += quantity
      } else {  
        // Push in Cart 
        cart.push({productId, quantity});
      }
}