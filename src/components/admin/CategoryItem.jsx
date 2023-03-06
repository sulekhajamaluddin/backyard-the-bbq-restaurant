//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function CategoryItem({ category }) {
  return (
    <article className="item-category">
      <Link to={`/admin/categories/${category.id}`}>
        <img src={category.thumbnailURL} alt="category" />
        <span>{category.title}</span>
        <FontAwesomeIcon className="icon" icon={solid("chevron-right")} />
      </Link>
    </article>
  );
}
