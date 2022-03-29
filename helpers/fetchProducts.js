const fetchProducts = async () => {
  // seu código aqui
  try {
    const reqProd = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const dadosFormatados = await reqProd.json();

    return dadosFormatados.results;
  } catch (error) {
    console.log(error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
