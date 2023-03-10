export default function getFilteredProducts(products, categoryID) {
  const filteredProducts = products.filter(
    (product) => product.parent_id === categoryID
  );
  return filteredProducts;
}
