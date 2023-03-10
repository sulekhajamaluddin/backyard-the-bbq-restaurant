//Node Modules
import { useNavigate, useParams } from "react-router-dom";
//Project Files
import { useCategories } from "../../state/CategoriesProvider";
import deleteDocument from "../../scripts/firestore/deleteDocument";
import NotFound from "../common/NotFound";
import placeholder from "../../assets/food_placeholder.jpeg";
import BackButtonIcon from "../../components/common/BackButtonIcon";
import DisplayField from "../../components/common/DisplayField";
import EditButtonIcon from "../../components/common/EditButtonIcon";
import DeleteButtonIcon from "../../components/common/DeleteButtonIcon";

export default function ViewCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, dispatch } = useCategories();
  const categorySelected = categories.find((category) => category.id === id);

  async function onDelete(item) {
    const message = `Are you sure you want to delete ${item.title}`;
    const result = window.confirm(message);
    if (!result) return;
    await deleteDocument("categories", item.id);
    dispatch({ type: "delete", payload: item.id });
    navigate("/admin/categories");
  }

  //Safeguard
  if (categorySelected === undefined)
    return <NotFound text={"category"} path={"/admin"} />;

  const { title, thumbnailURL } = categorySelected;
  const { short_description, long_description } = categorySelected;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  return (
    <div className="view-category flex-column-center">
      <h1>View Category</h1>
      <div className="button-holder">
        <BackButtonIcon path="/admin/categories" />
        <EditButtonIcon path={`/admin/categories/${id}/edit`} />
        <DeleteButtonIcon onDelete={() => onDelete(categorySelected)} />
      </div>
      <article className="category-article flex-column">
        <DisplayField text="Title:" content={title} />
        <DisplayField text="Description:" content={short_description} />
        <DisplayField text="Long Description:" content={long_description} />
        <img src={imageSource} alt="category" />
      </article>
    </div>
  );
}
