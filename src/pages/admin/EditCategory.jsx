//Node Modules
import { useParams } from "react-router-dom";

//Project Files
import { useCategories } from "../../state/CategoriesProvider";
import NotFound from "../common/NotFound";
import Form from "../../components/admin/forms/EditCategory";
import BackButtonIcon from "../../components/common/BackButtonIcon";

export default function EditCategory() {
  const { id } = useParams();
  const { categories } = useCategories();

  const categorySelected = categories.find((category) => category.id === id);

  //Safeguard

  if (categorySelected === undefined) return <NotFound text={"category"} />;

  return (
    <div className="edit-category flex-column-center">
      <h1>Edit Category</h1>
      <div className="button-holder">
        <BackButtonIcon path={`/admin/categories/${id}`} />
      </div>
      <Form collectionName={"categories"} category={categorySelected} />
    </div>
  );
}
