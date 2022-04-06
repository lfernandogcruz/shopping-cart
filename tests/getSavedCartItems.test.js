const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // 11.1
  // Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;
  it('Ao executar getSavedCartItems, método localStorage.getItem é chamado?', () =>{
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  // 11.2
  // Teste se, ao executar getSavedCartItems, o método localStorage.getItem
  // é chamado com o 'cartItems' como parâmetro.
  it('Verifica os parâmetros de localStorage.getItem quando chamado.', () =>{
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

  // fail('Teste vazio');
});
