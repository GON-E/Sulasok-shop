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
            <img src="images/${product.rating.star}star-rating.png" class="star-rating">
          </div>
          <div class="product-rating-container">
            ${product.rating.count}
          </div>
        </div>
        <div class="product-price-container">
          <span class="product-price">
            PHP ${product.priceCents / 100}
          </span>
        </div>
        <div class="product-quantity-container">
          <select class="quantity-selector">
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
        <div class="add-to-cart-btn-container">
          <button class="add-to-cart-btn js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
          </button>
        </div>
    </div>`

});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      // DATA ATTRIBUTE: Getting all the data 
      const productId  = button.dataset.productId; // Data ex. Vape
      let matchItem; // Accumulator


      //If already in the cart
      cart.forEach((item) => { 
        if(productId === item.productId) {
          matchItem = item; // Assigning
        }
      })
      // If there is a same item it becomes true
      if(matchItem){
        matchItem.quantity += 1;
      } else {
        // Push in Cart 
        cart.push({
        productId: productId,
        quantity: 1
      });
      }

      let cartQuantity = 0;
      // Loop through the array Cart
      cart.forEach((item) => {
      // Save all the quantity in cartQuantity
        cartQuantity += item.quantity;
      })
      // Cart quantity changes
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      console.log(cartQuantity);
      console.log(cart);
    });
  }
);