import React, { useState } from "react";
import { useCategories } from "../../../state/CategoriesProvider";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../../scripts/cloudStorage/uploadFile";
import { downloadFile } from "../../../scripts/cloudStorage/downloadFile";
import { updateDocument } from "../../../scripts/firestore/updateDocument";

export default function EditCategoryForm({ collectionName, categoryItem }) {
  const navigate = useNavigate();
  const { dispatch } = useCategories();
  const [category, setCategory] = useState(categoryItem);

  async function handleThumbnail(e) {
    const file = e.target.files[0];

    const filePath = `menu/${categoryItem.id}_${file.name}`;
    await uploadFile(file, filePath);
    const url = await downloadFile(filePath);

    setCategory((category) => {
      return {
        ...category,
        [e.target.id]: url,
      };
    });
  }

  function onChange(e) {
    setCategory((category) => {
      return {
        ...category,
        [e.target.id]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateDocument(collectionName, category);

    dispatch({ type: "update", payload: category });
    navigate(`/admin/categories/${category.id}`);
  }

  return (
    <form
      className="form flex-column"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label className="input-holder">
        Title:
        <input
          type="text"
          id="title"
          required
          value={category.title}
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <label className="input-holder">
        Thumbnail
        <input
          type="file"
          id="thumbnailURL"
          accept="image/png, image/jpeg"
          onChange={(e) => handleThumbnail(e)}
        ></input>
      </label>
      <label className="input-holder">
        Short Description
        <input
          type="text"
          id="short_description"
          placeholder="50 characters"
          required
          value={category.short_description}
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
          value={category.long_description}
          onChange={(e) => onChange(e)}
          required
          maxLength={100}
        ></textarea>
      </label>
      <input type="submit" className="primary-button"></input>
    </form>
  );
}
