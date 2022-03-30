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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const cart = document.querySelector('.cart__items');

// soma os valores dos produtos no carrinho
function printCartTotal() {
  const cartElements = cart.childNodes;
  // console.log(cartElements);
  const arrPrices = [];
  cartElements.forEach((elElCart) => {
    const elElEl = elElCart.innerHTML;
    // console.log(typeof elElEl, elElEl);
    const priceElement = elElEl.substring(elElEl.indexOf('$') + 1, elElEl.length);
    arrPrices.push(Number(priceElement));
  });
  const priceDiv = document.querySelector('.total-price');
  // console.log(arrPrices);
  const sumPrices = arrPrices.reduce((a, b) => a + b, 0);
  priceDiv.innerHTML = sumPrices;
  // console.log(sumPrices);
} // ref#2

// implementa a funcao 'clique para retirar' nos itens do cart
function cartItemClickListener(event) {
  // coloque seu código aqui
  console.log('abuble');
  event.target.remove();
  saveCartItems(cart.innerHTML);
  printCartTotal();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  console.log(li);
  return li;
}

// esvazia o carrinho
// add on: atualiza o localStorage
// . . . . atualiza o valor do carrinho
function emptyCart() {
  const clearButton = document.querySelector('.empty-cart');
  clearButton.addEventListener('click', () => {
    const itemsInCart = document.querySelectorAll('.cart__item');
    itemsInCart.forEach((item) => item.remove());
    printCartTotal();
    saveCartItems(cart.innerHTML);
  });
} // ref#1
emptyCart();

// exibe produtos na tela
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

// monta o obj a ser enviado a funcao que exibe o cart
// . add on: atualiza localStorage
// . . . . . soma os valores dos produtos
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
      cart.appendChild(elementItem);
      saveCartItems(cart.innerHTML);
      printCartTotal();
    });
  });
}

// recupera o localStorage
function riseFromYourGrave() {
  cart.innerHTML = getSavedCartItems();
  const eachItem = cart.childNodes;
  eachItem.forEach((itm) => {
    console.log(itm);
    itm.addEventListener('click', cartItemClickListener);
  });
}

window.onload = async () => {
  await printProds();
  sendToCart();
  riseFromYourGrave();
  printCartTotal();
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
// . . 1 - function emptyCart (requisito 6); // acabei voltando pro innerHTML = ''
// . . 2 - function printCartTotal (requisito 5);
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
// .
// . 2 - solução para filtrar o valor unitário da string que forma o item adicionado
// . . . ao carrinho (uso do .substring e .indexOf) foi verificado ao pesquisar por
// . . . "selecionar parte de uma string javascript" no Google, que retornou uma
// . . . página da DevMedia onde havia um exemplo que [quase] satisfez a necessidade,
// . . . precisando apenas acrescentar o parâmetro final.
// . . . Segue o link:
// . . . https://www.devmedia.com.br/javascript-substring-selecionando-parte-de-uma-string/39232
