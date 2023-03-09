//Node Modules
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useProducts } from "../../state/ProductsProvider";
import deleteDocument from "../../scripts/firestore/deleteDocument";
import NotFound from "../common/NotFound";

export default function ViewProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, dispatch } = useProducts();

  const productSelected = products.find((category) => category.id === id);

  async function onDelete(item) {
    console.log(item);
    const message = `Are you sure you want to delete ${item.title}`;
    const result = window.confirm(message);
    if (!result) return;
    await deleteDocument(`${productSelected.parent_id}/products`, item.id);
    dispatch({ type: "delete", payload: item.id });
    navigate("/admin/categories");
  }

  //Safeguard

  if (productSelected === undefined) return <NotFound text={"category"} />;

  return (
    <div className="view-category flex-column-center">
      <h1>View Product</h1>
      <div className="button-holder">
        <button onClick={() => navigate("/admin/products")}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
        <Link to={`/admin/products/${id}/edit`}>
          <FontAwesomeIcon
            className="edit-icon"
            icon={solid("pen-to-square")}
          />
        </Link>
        <button>
          <FontAwesomeIcon
            className="delete-icon"
            icon={solid("trash-can")}
            onClick={() => onDelete(productSelected)}
          />
        </button>
      </div>
      <article className="category-article flex-column">
        <div className="content flex-column">
          <span>Title:</span>{" "}
          <span className="title info">{productSelected.title}</span>
        </div>
        <div className="content flex-column">
          <span>Short description:</span>{" "}
          <span className="info">{productSelected.short_description}</span>
        </div>
        <div className="content flex-column">
          <span>Long description:</span>{" "}
          <span className="info">{productSelected.long_description}</span>
        </div>
        <div className="content flex-column">
          <span>Ingredients:</span>{" "}
          <span className="info">{String(productSelected.ingredients)}</span>
        </div>
        <img src={productSelected.thumbnailURL} alt="category" />
      </article>
    </div>
  );
}
