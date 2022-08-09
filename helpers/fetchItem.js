const fetchItem = (MLB1615760527) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${MLB1615760527}`;
  return fetch(url)
    .then((resposta) => resposta.json())
    .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
