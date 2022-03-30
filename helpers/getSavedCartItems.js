const getSavedCartItems = () => {
  // seu código aqui
  const recover = localStorage.getItem('cartItems');
  return recover;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
