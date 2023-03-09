//Node Modules
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useCategories } from "../../state/CategoriesProvider";
import deleteDocument from "../../scripts/firestore/deleteDocument";
import NotFound from "../common/NotFound";

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

  if (categorySelected === undefined) return <NotFound text={"category"} />;

  return (
    <div className="view-category flex-column-center">
      <h1>View Category</h1>
      <div className="button-holder">
        <button onClick={() => navigate("/admin/categories")}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
        <Link to={`/admin/categories/${id}/edit`}>
          <FontAwesomeIcon
            className="edit-icon"
            icon={solid("pen-to-square")}
          />
        </Link>
        <button>
          <FontAwesomeIcon
            className="delete-icon"
            icon={solid("trash-can")}
            onClick={() => onDelete(categorySelected)}
          />
        </button>
      </div>
      <article className="category-article flex-column">
        <div className="content flex-column">
          <span>Title:</span>{" "}
          <span className="title info">{categorySelected.title}</span>
        </div>
        <div className="content flex-column">
          <span>Short description:</span>{" "}
          <span className="info">{categorySelected.short_description}</span>
        </div>
        <div className="content flex-column">
          <span>Long description:</span>{" "}
          <span className="info">{categorySelected.long_description}</span>
        </div>
        <img src={categorySelected.thumbnailURL} alt="category" />
      </article>
    </div>
  );
}
