//Node Modules
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import { useCategories } from "../../state/CategoriesProvider";
import NotFound from "../common/NotFound";
import Form from "../../components/admin/forms/EditCategory";

export default function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories } = useCategories();

  const categorySelected = categories.find((category) => category.id === id);

  //Safeguard

  if (categorySelected === undefined) return <NotFound text={"category"} />;

  return (
    <div className="edit-category flex-column-center">
      <h1>Edit Category</h1>
      <div className="button-holder">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
      </div>
      <Form collectionName={"categories"} categoryItem={categorySelected} />
    </div>
  );
}
