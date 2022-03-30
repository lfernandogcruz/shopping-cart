function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// abaixo comentado pro lint nao chorar
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// abaixo comentado pro lint nao chorar
function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
}

// abaixo comentado pro lint nao chorar
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// abaixo comentado pro lint nao chorar
function emptyCart() {
  const clearButton = document.querySelector('.empty-cart');
  clearButton.addEventListener('click', () => {
    const cart = document.querySelector('.cart__items');
    cart.innerHTML = '';
    console.log('cliquei');
  });
} // ref#1
emptyCart();

async function printProds() {
  const prodCanvas = document.querySelector('.items');
  const prodObjs = await fetchProducts();
  prodObjs.forEach((elProduct) => {
    const prodsToPrint = {
      sku: elProduct.id,
      name: elProduct.title,
      image: elProduct.thumbnail,
    };
    prodCanvas.appendChild(createProductItemElement(prodsToPrint));
  });
}

function sendToCart() {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((addButton) => {
    addButton.addEventListener('click', async (event) => {
      const parentSection = event.target.parentElement;
      const clickedId = getSkuFromProductItem(parentSection);
      const fetchedItem = await fetchItem(clickedId);
      const objItemToCart = {
        sku: fetchedItem.id,
        name: fetchedItem.title,
        salePrice: fetchedItem.price,
      };
      const elementItem = createCartItemElement(objItemToCart);
      const cartItself = document.querySelector('.cart__items');
      cartItself.appendChild(elementItem);
    });
  });
}

window.onload = async () => {
  await printProds();
  sendToCart();
};

// :: REFERÊNCIAS UTILIZADAS ::
// .
// . Para evitar poluir o corpo do código, listo abaixo as referências que
// . foram indexadas ao final das funções às quais se referem.
// . . p.e.: 'ref#1' comentado no código se refere ao índice '1' listado abaixo.
// . . NOTA: Os índices são numerados por ordem de consulta/implementação,
// . . . e não por ordem de leitura ou execução.
// .
// . índice:
// . . 1 - function emptyCart (requisito 6);
// .
// .
// :: Lista de Referências:
// .
// . 1 - solução usando laço 'while' encontrado na documentação de '.removeChild',
// . . . no 4o exemplo sob o título 'Removendo todos os nós filhos de um elemento'.
// . . . consultei também documentação própria do método 'while'.
// . . . Seguem os links:
// . . . https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
// . . . https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
