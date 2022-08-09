const saveCartItems = (key, item) => {
  // seu código aqui  
  localStorage.setItem(key, JSON.stringify(item));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
