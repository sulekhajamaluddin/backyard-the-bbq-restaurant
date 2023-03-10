export default function getEditedProduct(formRef, product, url) {
  return {
    id: product.id,
    title: formRef.current.title.value,
    thumbnailURL: url,
    image_main: "",
    short_description: formRef.current.info.value,
    long_description: formRef.current.details.value,
    ingredients: formRef.current.ingredients.value,
    price: formRef.current.price.value,
  };
}
