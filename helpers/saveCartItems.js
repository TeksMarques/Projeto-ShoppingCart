const saveCartItems = (itens) => {
  // seu código aqui  
  localStorage.setItem('cartItens', itens);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
