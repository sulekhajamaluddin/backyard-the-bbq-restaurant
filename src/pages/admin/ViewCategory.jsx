//Node Modules
import { Link, useNavigate, useParams } from "react-router-dom";

//Project Files
import { useCategories } from "../../state/CategoriesProvider";
import NotFound from "../common/NotFound";
import deleteDocument from "../../scripts/firestore/deleteDocument";

export default function ViewCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, dispatch } = useCategories();

  const categorySelected = categories.find((category) => category.id === id);

  async function onClickDelete(item) {
    const message = `Are you sure you want to delete ${item.name}`;
    const result = window.confirm(message);
    if (!result) return;
    await deleteDocument("categories", item.id);
    dispatch({ type: "delete", payload: item.id });
    navigate("/admin/categories");
  }

  //Safeguard

  if (categorySelected === undefined) return <NotFound text={"category"} />;

  return (
    <div className="view-category flex-column">
      <h1>VIEW CATEGORY</h1>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <article className=" flex-column">
        <img src={categorySelected.thumbnailURL} alt="category" />
        <p>
          <span>Title:</span>{" "}
          <span className="title">{categorySelected.title}</span>
        </p>
        <p>
          <span>Short description:</span>{" "}
          <span>{categorySelected.short_description}</span>
        </p>
        <p>
          <span>Long description:</span>{" "}
          <span>{categorySelected.long_description}</span>
        </p>
      </article>
      <div className="button-holder">
        <Link className="primary-button">Edit</Link>
        <button
          className="delete-button"
          onClick={() => onClickDelete(categorySelected)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
