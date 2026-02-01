// payment.js

const { reduceStock } = require('./product');
const { getCartItems, getCartTotal, clearCart } = require('./cart');
const { applyDiscount } = require('./discount');

function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}

function processPayment(paymentMethod, couponCode) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  const items = getCartItems();
  if (items.length === 0) {
    return { status: 'failed', message: 'Cart is empty' };
  }

  const subtotal = getCartTotal();
  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    total = result.finalTotal;
  }

  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: 'ORD' + Date.now(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: 'success',
    message: 'Order placed successfully'
  };
}

module.exports = {
  processPayment
};
