import React, { useState } from "react";
import { useCategories } from "../../../state/CategoriesProvider";
import { createDocument } from "../../../scripts/firestore/createDocument";
import { useNavigate } from "react-router-dom";
import Input from "../../common/Input";

export default function Form({ collectionName }) {
  const navigate = useNavigate();
  const { dispatch } = useCategories();
  const [category, setCategory] = useState({
    title: "",
    thumbnailURL: "",
    image_mainURL: "",
    short_description: "",
    long_description: "",
  });

  function onChange(e) {
    console.log(e.target.value);
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
      {/* <Input text="Title:" id="title" onChange={onChange} /> */}
      <label className="input-holder">
        <span>Title:</span>
        <input
          type="text"
          id="title"
          required
          onChange={(e) => onChange(e)}
        ></input>
      </label>
      <label className="input-holder">
        <span>Short Description</span>
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
        <span>Long Description</span>
        <textarea
          type="text"
          id="long_description"
          placeholder="100 characters"
          onChange={(e) => onChange(e)}
          required
          maxLength={100}
        ></textarea>
      </label>
      <input type="submit" className="primary-button" disabled></input>
    </form>
  );
}
