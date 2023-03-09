//Node Modules
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import Item from "../../components/admin/Item";
import { useCategories } from "../../state/CategoriesProvider";

export default function Categories() {
  //Global state
  const { categories } = useCategories();
  const navigate = useNavigate();

  const categoryList = categories.map((category) => (
    <Item
      key={category.id}
      item={category}
      path={`/admin/categories/${category.id}`}
    />
  ));

  return (
    <div className="categories flex-column-center">
      <h1>CATEGORIES</h1>
      <div className="button-holder">
        <button onClick={() => navigate("/admin")}>
          <FontAwesomeIcon
            className="back-icon"
            icon={solid("circle-arrow-left")}
          />
        </button>
        <Link className="primary-button" to="/admin/categories/add">
          Add new
        </Link>
      </div>
      {categoryList}
    </div>
  );
}
