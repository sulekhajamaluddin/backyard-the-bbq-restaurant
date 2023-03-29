//Node Modules
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Project Files
import { useProducts } from "../../state/ProductsProvider";
import { readAllSubcollections } from "../../scripts/firestore/readDocuments";
import deleteDocument from "../../scripts/firestore/deleteDocument";
import NotFound from "../common/NotFound";
import BackButtonIcon from "../../components/common/BackButtonIcon";
import DeleteButtonIcon from "../../components/common/DeleteButtonIcon";
import EditButtonIcon from "../../components/common/EditButtonIcon";
import DisplayField from "../../components/common/DisplayField";
import placeholder from "../../assets/food_placeholder.jpeg";
import Loader from "../../components/common/Loader";
import Error from "../common/Error";

export default function ViewProduct() {
  const { id } = useParams();
  const { dispatch } = useProducts();
  const navigate = useNavigate();
  const [status, setStatus] = useState(0);
  const [product, setProduct] = useState([]);

  async function onDelete(item) {
    const message = `Are you sure you want to delete ${item.title}`;
    const result = window.confirm(message);
    if (!result) return;
    await deleteDocument(`categories/${product.parent_id}/products`, item.id);
    dispatch({ type: "delete", payload: item.id });
    navigate("/admin/products");
  }

  useEffect(() => {
    loadData("products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collectionName) {
    const data = await readAllSubcollections(collectionName, id).catch(onFail);
    onSuccess(data);
  }

  function onSuccess(data) {
    const selectedProduct = data.find((product) => product.id === id);
    setProduct(selectedProduct);
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  //Safeguard
  if (product === undefined)
    return <NotFound text={"product"} path={"/admin"} />;

  const { title, ingredients, price } = product;
  const { thumbnailURL, short_description, long_description } = product;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  if (status === 0) return <Loader />;
  if (status === 2) return <Error />;

  return (
    <div className="view-category flex-column-center">
      <h1>View Product</h1>
      <div className="button-holder">
        <BackButtonIcon path="/admin/products" />
        <EditButtonIcon path={`/admin/products/${product.id}/edit`} />
        <DeleteButtonIcon onDelete={() => onDelete(product)} />
      </div>
      <article className="category-article flex-column">
        <DisplayField text="Title:" content={title} />
        <DisplayField text="Description:" content={short_description} />
        <DisplayField text="Long Description:" content={long_description} />
        <DisplayField text="Ingredients:" content={String(ingredients)} />
        <DisplayField text="Price:" content={price} />
        <img src={imageSource} alt="category" />
      </article>
    </div>
  );
}
