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
  const categories = action.payload;
  return categories;
}

function onCreate(state, action) {
  const newCategory = action.payload;
  return [...state, newCategory];
}

function onUpdate(state, action) {
  const updatedCategory = action.payload;
  const clonedCategories = [...state];
  const itemIndex = clonedCategories.findIndex(
    (item) => item.id === updatedCategory.id
  );
  clonedCategories[itemIndex] = updatedCategory;
  return clonedCategories;
}

function onDelete(state, action) {
  const id = action.payload;
  const clonedCategories = [...state];
  const itemIndex = clonedCategories.findIndex((item) => item.id === id);
  clonedCategories.splice(itemIndex, 1);
  return clonedCategories;
}
