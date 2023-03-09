import { Link } from "react-router-dom";

export default function ProductItem({ item }) {
  const { title, thumbnailURL, short_description, price } = item;
  return (
    <article className="product-item flex-column-center">
      <img className="thumbnail" src={thumbnailURL} alt="category thumbnail" />
      <div className="flex-column-center">
        <h2>{title}</h2>
        <p>{short_description}</p>
        <span>PRICE : {price}/- per plate.</span>
        <Link className="button" to={`/product/${item.id}`}>
          View
        </Link>
      </div>
    </article>
  );
}
