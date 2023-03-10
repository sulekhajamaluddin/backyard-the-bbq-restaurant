//Node Modules
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

//Project Files
import placeholder from "../../assets/food_placeholder.jpeg";

export default function Item({ item, path }) {
  const { thumbnailURL } = item;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;

  return (
    <article className="item-category">
      <Link to={path}>
        <img src={imageSource} alt="category" />
        <span>{item.title}</span>
        <FontAwesomeIcon
          className="icon"
          icon={solid("circle-chevron-right")}
        />
      </Link>
    </article>
  );
}
