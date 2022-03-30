const fetchItem = async (id) => {
  // seu código aqui
  // 'https://api.mercadolibre.com/items/$ItemID'
  // // $ItemID = id do item selecionado
  try {
    const reqItem = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const formatedData = await reqItem.json();
    return formatedData;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
