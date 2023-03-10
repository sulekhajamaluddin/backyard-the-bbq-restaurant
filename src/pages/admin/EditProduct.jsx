//Node Modules
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useProducts } from "../../state/ProductsProvider";
import NotFound from "../common/NotFound";
import Form from "../../components/admin/forms/EditProduct";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  //const { products } = useProducts();
  const products = JSON.parse(localStorage.getItem("products"));

  const productSelected = products.find((product) => product.id === id);

  //Safeguard

  if (productSelected === undefined)
    return <NotFound text={"product"} path={"/admin"} />;

  return (
    <div className="edit-category flex-column-center">
      <h1>Edit Product</h1>
      <div className="button-holder">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
      </div>
      <Form
        collectionName={`categories/${productSelected.parent_id}/products`}
        productItem={productSelected}
      />
    </div>
  );
}
