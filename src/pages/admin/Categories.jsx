//Node Modules
import { Link, useNavigate } from "react-router-dom";

//Project Files
import CategoryItem from "../../components/admin/CategoryItem";
import { useCategories } from "../../state/CategoriesProvider";

export default function Categories() {
  //Global state
  const { categories } = useCategories();
  const navigate = useNavigate();

  const categoryList = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return (
    <div className="categories flex-column-center">
      <h1>CATEGORIES</h1>
      <div className="button-holder">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <Link className="primary-button" to="/admin/categories/add">
          Add new
        </Link>
      </div>
      {categoryList}
    </div>
  );
}
