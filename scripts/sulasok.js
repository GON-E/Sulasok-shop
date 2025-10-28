import { products } from './products.js'; // from products.js
import { cart, addToCart } from './cart.js'; // from cart.js
import { formatCurrency } from './utils/money.js'; 
let notificationTimeout = {}; // Object for timeout
let productsHTML = '';
// saves the object in the product  

products.forEach((product) => {
  // Accumulator  
  productsHTML += `
  <div class="product-container">
        <div class="product-image-container">
          <img src="${product.image}" class="standard-image-dsgn">
        </div>
        <div class="Product-name-container">
          <span class="product-name">
            ${product.name}
          </span>
        </div>
        <div class="rating-container">
          <div class="star-rating-container">
            <img src="images/ratings/${product.rating.star}star-rating.png" class="star-rating">
          </div>
          <div class="product-rating-container">
            ${product.rating.count}
          </div>
        </div>
        <div class="product-price-container">
          <span class="product-price">
            PHP ${formatCurrency(product.priceCents)}
          </span>
        </div>
        <div class="product-quantity-container">
          <select class="quantity-selector js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10 </option>
          </select>
        </div>
        <div class="added-to-cart js-added-to-cart" data-product-id="${product.id}"></div>
        <div class="add-to-cart-btn-container">
          <button class="add-to-cart-btn js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
          </button>
        </div>
    </div>`

});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

// Handles Update in the web, not the actual cart... It stays here
export function updateCartQuantity() {
  let cartQuantity = 0;
  // Loop through the array Cart
  cart.forEach((item) => {
      // Save all the quantity in cartQuantity
    cartQuantity += item.quantity;
  });     
      // Cart quantity changes
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      // DATA ATTRIBUTE: Getting all the data 
      const {productId} = button.dataset; // Data Id like item1 DECLARATION OF PRODUCTID
      addToCart(productId);
      showAddedNotification(productId);
      updateCartQuantity();
    });
  }
);

  function showAddedNotification(productId) { 
    let notification = document.querySelector(`.js-added-to-cart[data-product-id="${productId}"]`);
    if(!notification) return; 

    notification.innerHTML = 'Added!'; // NOTIFICATION

    clearTimeout(notificationTimeout[productId]) // CLEAR TIMEOUT FOR CERTAINE PRODUCT 

    notificationTimeout[productId] = setTimeout(() => { // RESET TIMER
      notification.innerHTML = '';
    }, 1000);
  };

