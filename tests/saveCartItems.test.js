const localStorageSimulator = require("../mocks/localStorageSimulator");
const saveCartItems = require("../helpers/saveCartItems");

localStorageSimulator("setItem");

describe("3 - Teste a função saveCartItems", () => {
  // implemente seus testes aqui
  test("Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado", () => {
    saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toBeCalled();
  });
  test("Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros", () => {
    saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toBeCalledWith(
      "cartItems",
      "<ol><li>Item</li></ol>"
    );
  });
});
