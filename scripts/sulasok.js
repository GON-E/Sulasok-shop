//Represents a list
// Whole Data for the products

// SAVE DATA (DATA STRUCT)
const products = [{

  image: 'images/M69.jpg',
  name: 'M69: Rifle',
  rating: {
    star: 3,
    count: 90
  },
  priceCents: 690000 
}, {

  image: 'images/vape.png',
  name: 'Vape',
  rating: {
    star: 3,
    count: 69
  },
  priceCents: 2000
}, {

  image: 'images/cherry-mobile.jpg',
  name: 'Cherry Mobile',
  rating: {
    star: 3,  
    count: 78
  },
  priceCents: 560000
}, {

  image: 'images/c69.jpg',
  name: 'C69',
  rating: {
    star: 3,
    count: 99
  },
  priceCents: 96000000
}, {

  image: 'images/whiteT.jpg',
  name: 'White T-Shirt',
  rating: {
    star: 3,
    count: 100
  },
  priceCents: 20000
}, {
  image: 'images/dildo.jpg',
  name: "Dildo ni neel",
  rating: {
    star: 3,
    count: 69
  },
  priceCents: 6969
}
];

// Combine all strings
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
          <button class="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
    </div>`

});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;
