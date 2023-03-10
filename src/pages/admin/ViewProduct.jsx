//Node Modules
import { useNavigate, useParams } from "react-router-dom";
//Project Files
import { useProducts } from "../../state/ProductsProvider";
import deleteDocument from "../../scripts/firestore/deleteDocument";
import NotFound from "../common/NotFound";
import BackButtonIcon from "../../components/common/BackButtonIcon";
import DeleteButtonIcon from "../../components/common/DeleteButtonIcon";
import EditButtonIcon from "../../components/common/EditButtonIcon";
import DisplayField from "../../components/common/DisplayField";
import placeholder from "../../assets/food_placeholder.jpeg";

export default function ViewProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, dispatch } = useProducts();
  const productSelected = products.find((category) => category.id === id);

  async function onDelete(item) {
    const message = `Are you sure you want to delete ${item.title}`;
    const result = window.confirm(message);
    if (!result) return;
    await deleteDocument(`${productSelected.parent_id}/products`, item.id);
    dispatch({ type: "delete", payload: item.id });
    navigate("/admin/categories");
  }

  //Safeguard
  if (productSelected === undefined) return <NotFound text={"category"} />;

  const { title, short_description, long_description, ingredients, price } =
    productSelected;
  const { thumbnailURL } = productSelected;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  return (
    <div className="view-category flex-column-center">
      <h1>View Product</h1>
      <div className="button-holder">
        <BackButtonIcon path="/admin/products" />
        <EditButtonIcon path={`/admin/products/${productSelected.id}/edit`} />
        <DeleteButtonIcon onDelete={() => onDelete(productSelected)} />
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
