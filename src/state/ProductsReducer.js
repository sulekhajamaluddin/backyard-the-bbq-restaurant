export default function StudentsReducer(state, action) {
  switch (action.type) {
    case "initialise":
      return onInitialise(state, action);
    case "create":
      return onCreate(state, action);
    case "update":
      return onUpdate(state, action);
    case "delete":
      return onDelete(state, action);
    default:
      throw new Error("Unhandled action:", action.type);
  }
}

function onInitialise(state, action) {
  const products = action.payload;
  return products;
}

function onCreate(state, action) {
  const newProduct = action.payload;
  return [...state, newProduct];
}

function onUpdate(state, action) {
  const updatedProduct = action.payload;
  const clonedProducts = [...state];
  const itemIndex = clonedProducts.findIndex(
    (item) => item.id === updatedProduct.id
  );
  clonedProducts[itemIndex] = updatedProduct;
  return clonedProducts;
}

function onDelete(state, action) {
  const id = action.payload;
  const clonedProducts = [...state];
  const itemIndex = clonedProducts.findIndex((item) => item.id === id);
  clonedProducts.splice(itemIndex, 1);
  return clonedProducts;
}
