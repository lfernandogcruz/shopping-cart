const saveCartItems = (itemCart) => {
  // seu código aqui
  // console.log(itemCart);
    localStorage.setItem('cartItems', itemCart);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
