import React, { useState, useRef } from "react";
import { useCategories } from "../../../state/CategoriesProvider";
import { useProducts } from "../../../state/ProductsProvider";
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useNavigate } from "react-router-dom";
import { getAddedProduct } from "../../../scripts/utils/getAddedProduct";

export default function ProductForm() {
  const navigate = useNavigate();
  const formRef = useRef();
  const { categories } = useCategories();
  const { dispatch } = useProducts();
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState(false);
  const collectionName = `categories/${category}/products`;

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = getAddedProduct(formRef);
    const documentId = await createDocument(collectionName, newProduct);
    dispatch({ type: "create", payload: { id: documentId, ...newProduct } });
    navigate(`/admin/products`);
  }

  function selectCategory(e) {
    setCategory(e.target.value);
  }

  function focus() {
    setMessage(true);
  }

  const guideline =
    "Enter ingredients separated by commas like ingredient1, ingredient2, ingredient3";

  const options = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.title}
    </option>
  ));

  return (
    <form ref={formRef} className="form" onSubmit={(e) => handleSubmit(e)}>
      <label>Category of the product:</label>
      <select id="category" onChange={(e) => selectCategory(e)} required>
        <option value="">Choose a category</option>
        {options}
      </select>
      <label>Title</label>
      <input type="text" name="title" required />
      <label>Short Description</label>
      <input type="text" name="info" required />
      <label>Long Description</label>
      <input type="textarea" name="details" required />
      <label>Ingredients</label>
      <input type="text" name="ingredients" required onFocus={() => focus()} />
      {message && <span className="message">{guideline}</span>}
      <label>Price</label>
      <input type="text" name="price" required />
      <input type="reset" />
      <input type="submit" className="primary-button"></input>
    </form>
  );
}
