import React, { useState, useRef } from "react";
import { useCategories } from "../../../state/CategoriesProvider";
import { useProducts } from "../../../state/ProductsProvider";
import { useNavigate } from "react-router-dom";
import { getURL } from "../../../scripts/utils/getURL";
import { updateDocument } from "../../../scripts/firestore/updateDocument";
import getEditedProduct from "../../../scripts/utils/getEditedProduct";

export default function EditProductForm({ collectionName, productItem }) {
  const navigate = useNavigate();
  const formRef = useRef();
  const { dispatch } = useProducts();
  const { categories } = useCategories();
  const [url, setUrl] = useState(productItem.thumbnailURL);
  const [disabled, setDisabled] = useState(false);
  const { short_description: info, long_description: details } = productItem;
  const { title, ingredients: content, price } = productItem;

  async function handleImage(e) {
    setDisabled(true);
    const file = e.target.files[0];
    const filePath = `menu/${productItem.id}_${file.name}`;
    const url = await getURL(file, filePath);
    setUrl(url);
    setDisabled(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const editedProduct = getEditedProduct(formRef, productItem, url);
    await updateDocument(collectionName, editedProduct);
    dispatch({
      type: "update",
      payload: { ...editedProduct, parent_id: productItem.parent_id },
    });
    navigate(`/admin/products`);
  }

  const parentCategory = categories.find(
    (category) => category.id === productItem.parent_id
  );
  const parentCategoryName = parentCategory.title;

  return (
    <form
      ref={formRef}
      className="form flex-column"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>Title</label>
      <input type="text" name="title" defaultValue={title} required />
      <label>Category:</label>
      <input type="text" disabled defaultValue={parentCategoryName}></input>
      <input type="file" onChange={(e) => handleImage(e)} />
      <label>Short Description:</label>
      <input type="text" name="info" defaultValue={info} required />
      <label>Long Description:</label>
      <input type="textarea" name="details" defaultValue={details} required />
      <label>Ingredients:</label>
      <input type="text" name="ingredients" defaultValue={content} required />
      <label>Price</label>
      <input type="text" name="price" defaultValue={price} required />
      <input type="submit" className="primary" disabled={disabled}></input>
    </form>
  );
}
