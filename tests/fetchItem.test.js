require("../mocks/fetchSimulator");
const { fetchItem } = require("../helpers/fetchItem");
const item = require("../mocks/item");

describe("2 - Teste a função fetchItem", () => {
  // implemente seus testes aqui
  test("Verificar se fetchItem é uma funçao", () => {
    expect(typeof fetchItem).toBe("function");
  });
  test('Execute a função fetchItem com o argumento "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalled();
  });
  test('Teste se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalledWith(
      "https://api.mercadolibre.com/items/MLB1615760527"
    );
  });
  test('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      expect.assertions(1);
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error("You must provide an url"));
    }
  });
});
