import { Link } from "react-router-dom";
import placeholder from "../../assets/food_placeholder.jpeg";

export default function CategoryItem({ item, content }) {
  const { title, thumbnailURL } = item;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;
  const path = `/category/${item.id}`;
  return (
    <article className="category-item flex-column-center">
      <img className="thumbnail" src={imageSource} alt="category thumbnail" />
      <div className="flex-column-center">
        <h2>{title}</h2>
        <p className="long">{content}</p>
        <Link className="button" to={path} state={{ category: item }}>
          View menu
        </Link>
      </div>
    </article>
  );
}
