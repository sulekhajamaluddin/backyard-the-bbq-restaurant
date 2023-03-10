// //Node Modules
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Project Files
import { useProducts } from "../../state/ProductsProvider";
import { readAllSubcollections } from "../../scripts/firestore/readDocuments";
import Filter from "../../components/common/Filter";
import Item from "../../components/admin/Item";
import Error from "../common/Error";
import Loader from "../../components/common/Loader";
import BackButtonIcon from "../../components/common/BackButtonIcon";
import { useCategories } from "../../state/CategoriesProvider";

export default function Products() {
  const { products, dispatch } = useProducts();
  const { categories } = useCategories();
  const [status, setStatus] = useState(0);
  const [displayList, setDisplayList] = useState([]);
  const SUBCOLLECTION_NAME = "products";

  useEffect(() => {
    loadData(SUBCOLLECTION_NAME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(subcollectionName) {
    const data = await readAllSubcollections(subcollectionName).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    dispatch({ type: "initialise", payload: data });
    localStorage.setItem("products", JSON.stringify(data));
    setDisplayList(data);
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  if (status === 0) return <Loader />;
  if (status === 2) return <Error />;

  const productList = displayList.map((product) => (
    <Item
      key={product.id}
      item={product}
      path={`/admin/products/${product.id}`}
    />
  ));

  return (
    <div className="categories flex-column-center">
      <h1>PRODUCTS</h1>
      <div className="button-holder">
        <BackButtonIcon path={"/admin"} />
        <Link className="primary" to="/admin/products/add">
          Add new
        </Link>
      </div>
      <Filter
        className="select"
        items={categories}
        setDisplayList={setDisplayList}
        products={products}
      />
      {productList}
    </div>
  );
}
