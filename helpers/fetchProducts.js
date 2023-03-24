const fetchProducts = async (query) => {
  // seu código aqui
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}}`;
    const reqProd = await fetch(endpoint);
    const dadosFormatados = await reqProd.json();
    return dadosFormatados.results;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
