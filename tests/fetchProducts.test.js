require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Verificar se fetchProducts é uma funçao', () => {
    expect(typeof fetchProducts).toBe('function');
  }); 
  test('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  }) 
  test('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint' , async () => {
    const param = 'computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url)
  })
  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch',async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)   
  })
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async ()=>{
    try {
      expect.assertions(1);
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }    
  })
});
