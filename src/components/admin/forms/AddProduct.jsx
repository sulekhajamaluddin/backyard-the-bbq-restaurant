import React, { useState } from "react";
import { useCategories } from "../../../state/CategoriesProvider";
import { useProducts } from "../../../state/ProductsProvider";
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const navigate = useNavigate();
  const { categories } = useCategories();
  const { dispatch } = useProducts();

  const [selectedCategoryID, setSelectedCategoryID] = useState("");
  const collectionName = `categories/${selectedCategoryID}/products`;

  const [product, setProduct] = useState({
    title: "",
    thumbnailURL: "",
    image_main: "",
    short_description: "",
    long_description: "",
    ingredients: [],
    price: 0,
  });

  function onChange(e) {
    if (e.target.id === "ingredients") {
      setProduct(() => {
        return {
          ...product,
          [e.target.id]: e.target.value.split(","),
        };
      });
    } else {
      setProduct(() => {
        return {
          ...product,
          [e.target.id]: e.target.value,
        };
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const documentId = await createDocument(collectionName, product);
    dispatch({ type: "create", payload: { id: documentId, ...product } });
    navigate(`/admin/products/${documentId}`);
  }

  const options = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.title}
    </option>
  ));

  return (
    <form
      className="form flex-column"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>
        Category of the product:
        <select
          name="category"
          id="category"
          onChange={(e) => setSelectedCategoryID(e.target.value)}
        >
          <option value="">Choose a category</option>
          {options}
        </select>
      </label>
      <label className="input-holder">
        Title:
        <input
          type="text"
          id="title"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      {/* <label className="input-holder">
        Thumbnail URL:
        <input
          type="text"
          id="thumbnailURL"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <label className="input-holder">
        Main Image:
        <input
          type="text"
          id="image_main"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label> */}
      <label className="input-holder">
        Short Description
        <input
          type="text"
          id="short_description"
          placeholder="50 characters"
          required
          maxLength={50}
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <label className="input-holder">
        Long Description
        <textarea
          type="text"
          id="long_description"
          placeholder="100 characters"
          onChange={(e) => onChange(e)}
          required
          maxLength={100}
        ></textarea>
      </label>
      <label className="input-holder">
        Ingredients:
        <input
          type="text"
          id="ingredients"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <label className="input-holder">
        Price:
        <input
          type="text"
          id="price"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <input type="submit" className="primary-button"></input>
    </form>
  );
}
