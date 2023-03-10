//Node Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project Files
import { readDocuments } from "../../scripts/firestore/readDocuments";
import Loader from "../../components/common/Loader";
import ProductItem from "../../components/user/ProductItem";
import { useCategories } from "../../state/CategoriesProvider";
import { useProducts } from "../../state/ProductsProvider";
import NotFound from "../../pages/common/NotFound";
import Error from "../common/Error";
import placeholder from "../../assets/placeholder.png";

export default function Category() {
  const { id } = useParams();
  const { categories } = useCategories();
  const { products, dispatch } = useProducts();
  const [status, setStatus] = useState(0);

  const selectedCategory = categories.find((category) => category.id === id);

  const COLLECTION_NAME = `categories/${selectedCategory.id}/products`;

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
    localStorage.setItem("productItems", JSON.stringify(data));
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  if (status === 0) return <Loader />;
  if (status === 2) return <Error />;

  //Safeguard
  if (selectedCategory === undefined) return <NotFound text={"category"} />;

  const { thumbnailURL, title } = selectedCategory;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  const productsList = products.map((product) => (
    <ProductItem key={product.id} item={product} />
  ));

  return (
    <div className="category">
      <img src={imageSource} alt="A category thumbnail" />
      <section className="details flex-column-center">
        <h1>{`${title} dishes`}</h1>
        {productsList}
      </section>
    </div>
  );
}
