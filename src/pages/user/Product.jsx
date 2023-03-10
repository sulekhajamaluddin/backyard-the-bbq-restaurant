//Node Modules
import { useParams, useNavigate } from "react-router-dom";

//Project Files
import { useProducts } from "../../state/ProductsProvider";
import NotFound from "../../pages/common/NotFound";
import placeholder from "../../assets/placeholder.png";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { products } = useProducts();
  const products = JSON.parse(localStorage.getItem("productItems"));

  const selectedProduct = products.find((product) => product.id === id);

  //Safeguard
  if (selectedProduct === undefined) return <NotFound text={"product"} />;

  const ingredients = selectedProduct.ingredients.map((ingredient, index) => (
    <span key={index}>{ingredient}</span>
  ));

  const { thumbnailURL } = selectedProduct;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  return (
    <div className="product">
      <img src={imageSource} alt={`${selectedProduct.title}`} />
      <section className="details flex-column-center">
        <h1>{selectedProduct.title}</h1>
        <p className="long">{selectedProduct.long_description}</p>
        <span className="price">
          PRICE : {selectedProduct.price}/- per plate.
        </span>
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
