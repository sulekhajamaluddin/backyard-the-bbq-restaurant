import { Link } from "react-router-dom";
import placeholder from "../../assets/food_placeholder.jpeg";

export default function CategoryItem({ item }) {
  const { title, thumbnailURL, long_description } = item;
  const imageSource = thumbnailURL === "" ? placeholder : thumbnailURL;
  const path = `/category/${item.id}`;
  return (
    <article className="category-item flex-column-center">
      <img className="thumbnail" src={imageSource} alt="category thumbnail" />
      <div className="flex-column-center">
        <h2>{title}</h2>
        <p>{long_description}</p>
        <Link className="button" to={path} state={{ category: item }}>
          View menu
        </Link>
      </div>
    </article>
  );
}
