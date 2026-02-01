// cart.js

const { getProductById, checkStock } = require('./product');

let cartItems = [];

function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) return 'Product not found';
  if (!checkStock(productId, quantity)) return 'Not enough stock';

  const item = cartItems.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
    return 'Cart updated';
  } else {
    cartItems.push({ productId, quantity });
    return 'Product added to cart';
  }
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return 'Product removed';
}

function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return 'Not enough stock';

  const item = cartItems.find(i => i.productId === productId);
  if (!item) return 'Item not found';

  item.quantity = newQuantity;
  return 'Quantity updated';
}

function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      total: product.price * item.quantity,
      category: product.category
    };
  });
}

function getCartTotal() {
  let total = 0;
  cartItems.forEach(item => {
    const product = getProductById(item.productId);
    total += product.price * item.quantity;
  });
  return total;
}

function clearCart() {
  cartItems = [];
}

module.exports = {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartItems,
  getCartTotal,
  clearCart
};
