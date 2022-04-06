require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  // 9.1
  // Teste se fetchItem é uma função;
  it('Testa se "fetchItem" é uma função.', () => {
    expect(typeof fetchItem).toBe('function');
  });

  // 9.2
  // Execute a função fetchItem com o argumento do item "MLB1615760527"
  // e teste se fetch foi chamada;
  it('Ao executar "fetchItem("MLB1615760527") como argumento, "fetch" é chamada?', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  // 9.3
  // Teste se, ao chamar a função fetchItem com o argumento do item
  // "MLB1615760527", a função fetch utiliza o endpoint
  // "https://api.mercadolibre.com/items/MLB1615760527";
  it('Com fetchItem("MLB1615760527"), a função fetch utiliza o endpoint correto?', async () => {
    const endpoint2 = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint2);
  });
  // 9.4
  // Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527"
  // é uma estrutura de dados igual ao objeto item que já está importado no arquivo.
  it('O retorno de fetchProducts("MLB1615760527") é igual ao objeto computadorSearch?', async () => {
    const testaremos = await fetchItem('MLB1615760527');
    expect(testaremos).toEqual(item);
  }); // mesma estrutura feita no requisito 8 (FetchProducts.test.js).

  // 9.5
  // Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem:
  // You must provide an url.
  // Dica: Lembre-se de usar o new Error('mensagem esperada aqui')
  // para comparar com o objeto retornado da API.
  it('Ao chamar fetchItem() sem argumento, erro: You must provide an url', async () => {
    const failRetrieve = await fetchItem();
    // console.log(failRetrieve);
    expect(failRetrieve).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
