import { Link } from "react-router-dom";

export default function ProductItem({ item }) {
  const { title, thumbnailURL, short_description, price } = item;
  //const path = `/category/${item.id}`;
  return (
    <article className="product-item flex-column-center">
      <img className="thumbnail" src={thumbnailURL} alt="category thumbnail" />
      <div className="flex-column-center">
        <h2>{title}</h2>
        <p>{short_description}</p>
        <span>PRICE : {price}/- per plate.</span>
        <Link className="button">View menu</Link>
      </div>
    </article>
  );
}
