//Node Modules
import React, { useState, useEffect } from "react";

//Project Files
import Router from "./components/common/Router";
import Loader from "./components/common/Loader";
import Error from "./pages/common/Error";
import { useCategories } from "./state/CategoriesProvider";
import { readDocuments } from "./scripts/firestore/readDocuments";

//Styles
import "./styles/styles.scss";

export default function App() {
  //Global State
  const { dispatch } = useCategories();
  const [status, setStatus] = useState(0);

  const COLLECTION_NAME = "categories";

  useEffect(() => {
    loadData(COLLECTION_NAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collectionName) {
    const data = await readDocuments(collectionName).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initialise", payload: data });
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  return (
    <div className="App">
      {status === 0 && <Loader />}
      {status === 1 && <Router />}
      {status === 2 && <Error />}
    </div>
  );
}
