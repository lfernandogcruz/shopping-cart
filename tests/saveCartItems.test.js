const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // 10.1
  // Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>,
  // o método localStorage.setItem é chamado;
  it('Ao executar saveCartItems com o argumento, método localStorage.setItem é chamado?', () =>{
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  // 10.2
  // Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>,
  // o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro 'cartItems'
  // e o segundo sendo o valor passado como argumento para saveCartItems.
  it('Verifica os parâmetros de localStorage.setItem quando chamado.', () =>{
    const arg = '<ol><li>Item</li></ol>';
    saveCartItems(arg);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', arg);
  });
  // fail('Teste vazio');
});
