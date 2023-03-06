import React, { useState } from "react";
import { useCategories } from "../../state/CategoriesProvider";
import { createDocument } from "../../scripts/firestore/createDocument";
import { useNavigate } from "react-router-dom";

export default function Form({ collectionName }) {
  const navigate = useNavigate();
  const { dispatch } = useCategories();
  const [category, setCategory] = useState({
    title: "",
    thumbnailURL: "",
    short_description: "",
    long_description: "",
  });

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
    const documentId = await createDocument(collectionName, category);
    console.log(documentId);
    dispatch({ type: "create", payload: { id: documentId, ...category } });
    navigate(`/admin/categories/${documentId}`);
  }

  return (
    <form
      className="form flex-column"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h1>Add A New Category</h1>
      <label className="input-holder">
        Title:
        <input
          type="text"
          id="title"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <label className="input-holder">
        Thumbnail URL:
        <input
          type="text"
          id="thumbnailURL"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
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
      <input type="submit" className="primary-button"></input>
    </form>
  );
}
