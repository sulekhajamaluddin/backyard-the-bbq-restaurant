import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../../state/CategoriesProvider";
import { createDocument } from "../../../scripts/firestore/createDocument";
import getAddedCategory from "../../../scripts/utils/getAddedCategory";

export default function Form({ collectionName }) {
  const navigate = useNavigate();
  const formRef = useRef();
  const { dispatch } = useCategories();

  async function handleSubmit(e) {
    e.preventDefault();
    const newCategory = getAddedCategory(formRef);
    const documentId = await createDocument(collectionName, newCategory);
    dispatch({ type: "create", payload: { id: documentId, ...newCategory } });
    navigate(`/admin/categories/${documentId}`);
  }

  return (
    <form ref={formRef} className="form" onSubmit={(e) => handleSubmit(e)}>
      <label>Title</label>
      <input type="text" name="title" required />
      <label>Short Description</label>
      <input type="text" name="info" required max={50} />
      <label>Long Description</label>
      <input type="textarea" name="details" required max={100} />
      <input type="reset"></input>
      <input type="submit" className="primary-button"></input>
    </form>
  );
}
