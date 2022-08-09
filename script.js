const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

let itensCarrinho = [];

const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;
const addCarinho = async (event) => {
  const id = await getSkuFromProductItem(event.target.parentElement);
  const result = await fetchItem(id);
  const resultDes = {
    sku: result.id,
    name: result.title,
    salePrice: result.price,
  };
  const item = createCartItemElement(resultDes);
  itensCarrinho.push(resultDes);
  saveCartItems('item', itensCarrinho);
  const carrinho = document.querySelector('.cart__items');
  carrinho.appendChild(item);
};

const renderCarrinho = async () => {
  itensCarrinho.forEach((element) => {
    const item = createCartItemElement(element);
    const carrinho = document.querySelector('.cart__items');
    carrinho.appendChild(item);
  });
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const botao = createCustomElement(
    'button',
    'item__add',
    'Adicionar ao carrinho!',
  );
  botao.addEventListener('click', addCarinho);
  section.appendChild(botao);
  return section;
};

const produtos = async () => {
  const objeto = await fetchProducts('computador');
  const itens = document.querySelector('.items');
  const { results } = objeto;
  results.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
    const product = createProductItemElement({ sku, name, image });
    itens.appendChild(product);
  });
};

window.onload = () => {
  produtos();
  itensCarrinho = getSavedCartItems('item') || [];
  renderCarrinho();
};
