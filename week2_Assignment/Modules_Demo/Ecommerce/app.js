// app.js

const {
  getAllProducts,
  searchProducts
} = require('./product');

const {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart
} = require('./cart');

const { processPayment } = require('./payment');

console.log('=== E-Commerce Store ===');

console.log('\nAll Products:');
console.log(getAllProducts());

console.log('\nSearch "phone":');
console.log(searchProducts('phone'));

console.log('\nAdd to Cart:');
console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log('\nCart Items:');
console.log(getCartItems());
console.log('Total:', getCartTotal());

console.log('\nUpdate Quantity:');
console.log(updateQuantity(1, 2));

console.log('\nRemove Item:');
console.log(removeFromCart(3));

console.log('\nUpdated Cart:');
console.log(getCartItems());
console.log('Total:', getCartTotal());

console.log('\nCheckout:');
console.log(processPayment('upi', 'WELCOME10'));
