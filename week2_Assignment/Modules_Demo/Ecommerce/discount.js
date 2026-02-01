// discount.js

const coupons = {
  WELCOME10: { type: 'percentage', value: 10, minAmount: 1000 },
  FLAT500: { type: 'flat', value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: 'percentage',
    value: 20,
    minAmount: 10000,
    category: 'electronics'
  }
};

function validateCoupon(code, cartTotal, cartItems) {
  const coupon = coupons[code];
  if (!coupon) return { valid: false, message: 'Invalid coupon' };
  if (cartTotal < coupon.minAmount)
    return { valid: false, message: 'Minimum amount not met' };

  if (coupon.category) {
    const hasCategory = cartItems.some(
      item => item.category === coupon.category
    );
    if (!hasCategory)
      return { valid: false, message: 'Category not applicable' };
  }

  return { valid: true, message: 'Coupon applied' };
}

function calculateDiscount(code, total) {
  const coupon = coupons[code];
  if (coupon.type === 'percentage') {
    return (total * coupon.value) / 100;
  }
  return coupon.value;
}

function applyDiscount(cartTotal, code, cartItems) {
  const result = validateCoupon(code, cartTotal, cartItems);

  if (!result.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: result.message
    };
  }

  const discount = calculateDiscount(code, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: 'Discount applied'
  };
}

module.exports = {
  validateCoupon,
  calculateDiscount,
  applyDiscount
};
