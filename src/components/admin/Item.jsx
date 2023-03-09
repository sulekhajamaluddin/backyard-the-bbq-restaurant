//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Item({ item, path }) {
  return (
    <article className="item-category">
      <Link to={path}>
        <img src={item.thumbnailURL} alt="category" />
        <span>{item.title}</span>
        <FontAwesomeIcon
          className="icon"
          icon={solid("circle-chevron-right")}
        />
      </Link>
    </article>
  );
}
