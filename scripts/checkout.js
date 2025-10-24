// Save the Data
import { cart } from "./cart.js";
import { products } from "./products.js"; 
import { formatCurrency } from "./utils/money.js";

// Combine everything then put it inside the cartSummaryHTML
let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  // get the productId in the cartItem 
  const productId = cartItem.productId;
  
  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      // Then store the actual product in matching product
      matchingProduct = product;
    }
  });

cartSummaryHTML += `
  <div class="cart-item-container">
  <div class="delivery-date">
    Delivery date: <span class="js-delivery-date">Monday, October 20</span>
  </div>
  <!--START OF CART-ITEM-DETAILS-GRID-->
  <div class="cart-item-details-grid">
    <img src="${matchingProduct.image}">
    <div class="cart-item-details">
      <div class="product-name">${matchingProduct.name}</div>
      <div class="product-price">${formatCurrency(matchingProduct.priceCents)}</div>
      <div class="product-quantity">
        Quantity: <span>${cartItem.quantity}</span>
        <span class="link-primary">Update</span>
        <span class="link-primary">Delete</span>
      </div>
    </div>
    <div class="delivery-options">
      <div class="delivery-option-title">Choose a delivery  option:
      </div>
      <!--START OF DELIVERY OPTION-->
      <div class="delivery-option">
        <input type="radio" class="delivery-option-input" name="delivery-option">
        <div>
        <div class="delivery-option-date">Monday, October 20</div>
        <div class="delivery-option-price">FREE Shipping</div>
        </div>
      </div>
      <!--END OF DELIVERY OPTION-->
      <!--START OF DELIVERY OPTION-->
      <div class="delivery-option">
        <input type="radio" class="delivery-option-input" name="delivery-option-${productId}">
        <div>
        <div class="delivery-option-date">Tuesday, October 21</div>
        <div class="delivery-option-price">PHP 200 - Shipping</div>
        </div>
      </div>
      <!--END OF DELIVERY OPTION-->
      <!--START OF DELIVERY OPTION-->
      <div class="delivery-option">
        <input type="radio" class="delivery-option-input" name="delivery-option">
        <div>
        <div class="delivery-option-date">Wednesday, October 23</div>
        <div class="delivery-option-price">PHP 150 - Shipping</div>
        </div>
      </div>
      <!--END OF DELIVERY OPTION-->
    </div>
  </div> 
  <!--END OF CART-ITEM-DETAILS-GRID-->
  </div>`;
});

document.querySelector('.js-cart-summary').innerHTML = cartSummaryHTML;

console.log(cartSummaryHTML);
