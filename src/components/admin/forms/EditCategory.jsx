import React, { useState, useRef } from "react";
import { useCategories } from "../../../state/CategoriesProvider";
import { useNavigate } from "react-router-dom";
import { getURL } from "../../../scripts/utils/getURL";
import { updateDocument } from "../../../scripts/firestore/updateDocument";
import getEditedCategory from "../../../scripts/utils/getEditedCategory";

export default function EditCategoryForm({ collectionName, category }) {
  const navigate = useNavigate();
  const formRef = useRef();
  const { dispatch } = useCategories();
  const [url, setUrl] = useState(category.thumbnailURL);
  const [disabled, setDisabled] = useState(false);
  const { short_description: info, long_description: details } = category;

  async function handleImage(e) {
    setDisabled(true);
    const file = e.target.files[0];
    const filePath = `menu/${category.id}_${file.name}`;
    const url = await getURL(file, filePath);
    setUrl(url);
    setDisabled(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const editedCategory = getEditedCategory(formRef, category, url);
    await updateDocument(collectionName, editedCategory);
    dispatch({ type: "update", payload: editedCategory });
    navigate(`/admin/categories/${category.id}`);
  }

  return (
    <form ref={formRef} className="form" onSubmit={(e) => handleSubmit(e)}>
      <label>Title</label>
      <input type="text" name="title" defaultValue={category.title} required />
      <input
        type="file"
        name="image"
        onChange={(e) => handleImage(e)}
        accept="image/png, image/jpeg, image/webp"
      />
      <label>Short Description:</label>
      <input type="text" name="info" defaultValue={info} required max={50} />
      <label>Long Description:</label>
      <input type="text" name="details" defaultValue={details} required />
      <input type="reset" />
      <input type="submit" className="primary" disabled={disabled}></input>
    </form>
  );
}
