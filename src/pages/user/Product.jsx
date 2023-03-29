//Node Modules
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Project Files
import { readAllSubcollections } from "../../scripts/firestore/readDocuments";
import NotFound from "../../pages/common/NotFound";
import placeholder from "../../assets/placeholder.png";
import Loader from "../../components/common/Loader";
import Error from "../common/Error";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadData("products");
    console.log("useEffect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadData(collectionName) {
    console.log("loading");
    const data = await readAllSubcollections(collectionName).catch(onFail);
    console.log(data);
    onSuccess(data);
  }

  function onSuccess(data) {
    console.log(data);
    const selectedProduct = data.find((product) => product.id === id);
    setProduct(selectedProduct);
    setStatus(1);
  }

  function onFail() {
    setStatus(2);
  }

  //Safeguard
  if (product === undefined) return <NotFound text={"product"} path={"/"} />;
  if (status === 0) return <Loader />;
  if (status === 2) return <Error />;

  const ingredients = product.ingredients.map((ingredient, index) => (
    <span key={index}>{ingredient}</span>
  ));

  const { thumbnailURL } = product;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  return (
    <div className="product">
      <img src={imageSource} alt={`${product.title}`} />
      <section className="details flex-column-center">
        <h1>{product.title}</h1>
        <p className="long">{product.long_description}</p>
        <span className="price">PRICE : {product.price}/- per plate.</span>
        <section className="ingredients flex-column-center">
          <h2>Ingredients</h2>
          {ingredients}
        </section>
        <button className="back" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </section>
    </div>
  );
}
