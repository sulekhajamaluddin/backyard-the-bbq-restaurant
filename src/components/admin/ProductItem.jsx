//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProductItem({ product }) {
  return (
    <article className="item-category">
      <Link to={`/admin/products/${product.id}`}>
        <img src={product.thumbnailURL} alt="category" />
        <span>{product.title}</span>
        <FontAwesomeIcon className="icon" icon={solid("chevron-right")} />
      </Link>
    </article>
  );
}
