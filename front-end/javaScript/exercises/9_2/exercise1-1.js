const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (arrProducts, arrPrice) => {
  return arrProducts.map((element, index) => (
    { [element]: arrPrice[index] }
  ));
};

const listProducts = updateProducts(products, prices);

console.log(listProducts);