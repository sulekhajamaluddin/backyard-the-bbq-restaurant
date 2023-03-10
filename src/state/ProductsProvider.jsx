// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import ProductsReducer from "./ProductsReducer";

//Properties
const Context = createContext(null);

export function ProductsProvider({ children }) {
  //State
  const [products, dispatch] = useReducer(ProductsReducer, []);
  console.log(products);

  //Properties
  const values = { products, dispatch };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useProducts() {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useProducts only works if the parent component is wrapped in <ProductsProvider>"
    );

  return context;
}
