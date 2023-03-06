// Node modules
import { Link } from "react-router-dom";

export default function NotFound({ text }) {
  return (
    <div className="error-page flex-column-center">
      <h1>
        <span>Sorry we could not find this {text},</span>
        <span>please try again.</span>
      </h1>
      <Link className="back-button" to="/">
        Go back
      </Link>
    </div>
  );
}
