require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Testa se "fetchProducts" é uma função.', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  // 6.2
  // Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;
  it('Ao executar "fetchProducts("computador") como argumento, "fetch" é chamada?', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  // 6.3
  // Teste se, ao chamar a função fetchProducts com o argumento "computador",
  // a função fetch utiliza
  // o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";
  it('Com fetchProducts("computador"), a função fetch utiliza o endpoint correto?', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  // 6.4
  // Teste se o retorno da função fetchProducts com o argumento "computador" é
  // uma estrutura de dados igual ao objeto computadorSearch,
  // que já está importado no arquivo.
  it('O retorno de fetchProducts("computador") é igual ao objeto computadorSearch?', async () => {
    const testemos = await fetchProducts('computador');
    // console.log(testemos);
    expect(testemos).toEqual(computadorSearch.results);
  }); // a fc retorna o ".results" da API, entao comparei com idem do mock.
  
  // 6.5
  // Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com
  // a mensagem: You must provide an url. Dica: Lembre-se de usar o
  // new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.
  // it('Ao chamar fetchProducts() sem argumento, erro: You must provide an url', async () => {
    // const failResponse = await fetchProducts();
    // console.log(failResponse);
    // expect(failResponse).toEqual(new Error('You must provide an url'));
  // });
  //
  fail('Teste vazio');
});

// template
// it('texto', () => {
//   expect(coisa).toBe('algo');
// });
