export function getAddedProduct(formRef) {
  return {
    title: formRef.current.title.value,
    thumbnailURL: "",
    image_main: "",
    short_description: formRef.current.info.value,
    long_description: formRef.current.details.value,
    ingredients: formRef.current.ingredients.value.split(","),
    price: formRef.current.price.value,
  };
}
