const fetchItem = (item) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${item}`;
  return fetch(url)
    .then((resposta) => resposta.json())
    .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
