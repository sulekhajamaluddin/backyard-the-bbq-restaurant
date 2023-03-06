// Node modules
import { createContext, useContext, useReducer } from "react";

//Project Files
import CategoriesReducer from "./CategoriesReducer";

//Properties
const Context = createContext(null);

export function CategoriesProvider({ children }) {
  //State
  const [categories, dispatch] = useReducer(CategoriesReducer, []);

  //Properties
  const values = { categories, dispatch };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useCategories() {
  const context = useContext(Context);
  if (!context)
    throw new Error(
      "useCategories only works if the parent component is wrapped in <CategoriesProvider>"
    );

  return context;
}
