// //Node Modules
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { readAllSubcollections } from "../../scripts/firestore/readDocuments";
import { useProducts } from "../../state/ProductsProvider";
import Loader from "../../components/common/Loader";
import Error from "../common/Error";
import Item from "../../components/admin/Item";

export default function Products() {
  //Global State
  const { products, dispatch } = useProducts();
  const navigate = useNavigate();

  //Local State
  const [status, setStatus] = useState(0);

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
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  if (status === 0) return <Loader />;
  if (status === 2) return <Error />;

  const productList = products.map((product) => (
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
        <button onClick={() => navigate("/admin")}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
        <Link className="primary-button" to="/admin/products/add">
          Add new
        </Link>
      </div>
      {productList}
    </div>
  );
}
